import React, { useEffect, useRef, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';

const USER_KEY = 'username';

const ProfileButton = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Helper function to dispatch navigation events
    const navigateTo = (path: string) => {
        window.dispatchEvent(
            new CustomEvent('mfe:navigate', {
                detail: { path },
            })
        );
    };

    useEffect(() => {
        setUsername(localStorage.getItem(USER_KEY));

        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleProfileClick = () => {
        setOpen(!open);
    };

    const handleHiClick = () => {
        setOpen(false);
        navigateTo('/pages/profile');
    };

    const handleLogout = () => {
        localStorage.removeItem(USER_KEY);
        setUsername(null);
        setOpen(false);
        navigateTo('/auth/login');
    };

    return (
        <div
            className="profile-dropdown"
            ref={dropdownRef}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <a
                className="p-2 mx-1 position-relative"
                onClick={handleProfileClick}
                style={{ cursor: 'pointer' }}
            >
                <svg width="24" height="24">
                    <use xlinkHref="#user"></use>
                </svg>
            </a>
            {open && (
                <div
                    className="dropdown-menu show"
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: '100%',
                        minWidth: '160px',
                        zIndex: 1000,
                        background: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem',
                        boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)',
                    }}
                >
                    <button
                        className="dropdown-item"
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px 16px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={handleHiClick}
                    >
                        Hi {username || 'Guest'}
                    </button>
                    <div style={{ borderTop: '1px solid #eee' }}></div>
                    <button
                        className="dropdown-item"
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px 16px',
                            border: 'none',
                            background: 'none',
                            color: 'red',
                            cursor: 'pointer',
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export function defineProfileButtonElement() {
    class ProfileButtonElement extends HTMLElement {
        private _root?: Root;

        connectedCallback() {
            if (!this._root) {
                this._root = createRoot(this);
                this._root.render(<ProfileButton />);
            }
        }

        disconnectedCallback() {
            this._root?.unmount();
            this._root = undefined;
        }
    }

    if (!customElements.get('mfe-profile-button')) {
        customElements.define('mfe-profile-button', ProfileButtonElement);
    }
}

defineProfileButtonElement();
export default ProfileButton;
