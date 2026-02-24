// Simple in-memory + localStorage app state for demo
// IMPORTANT: Only import/use this from "use client" components.

export interface UserPreferences {
    topics: string[];
    sources: string[];
    frequency: string;
    regions: string[];
}

export interface AppUser {
    name: string;
    email: string;
    avatar: string;
    isGuest: boolean;
    preferencesSet: boolean;
}

const STORAGE_KEYS = {
    USER: "aipulse_user",
    PREFS: "aipulse_prefs",
};

function safeGet(key: string) {
    if (typeof window === "undefined") return null;
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
}

function safeSet(key: string, value: string) {
    if (typeof window === "undefined") return;
    try {
        window.localStorage.setItem(key, value);
    } catch { }
}

function safeRemove(key: string) {
    if (typeof window === "undefined") return;
    try {
        window.localStorage.removeItem(key);
    } catch { }
}

export function getUser(): AppUser | null {
    const raw = safeGet(STORAGE_KEYS.USER);
    try {
        return raw ? (JSON.parse(raw) as AppUser) : null;
    } catch {
        return null;
    }
}

export function setUser(user: AppUser) {
    safeSet(STORAGE_KEYS.USER, JSON.stringify(user));
}

export function getPreferences(): UserPreferences | null {
    const raw = safeGet(STORAGE_KEYS.PREFS);
    try {
        return raw ? (JSON.parse(raw) as UserPreferences) : null;
    } catch {
        return null;
    }
}

export function setPreferences(prefs: UserPreferences) {
    safeSet(STORAGE_KEYS.PREFS, JSON.stringify(prefs));
    const user = getUser();
    if (user) setUser({ ...user, preferencesSet: true });
}

export function logout() {
    safeRemove(STORAGE_KEYS.USER);
    safeRemove(STORAGE_KEYS.PREFS);
}

export function loginAsSSO() {
    const existing = getUser();
    if (!existing) {
        setUser({
            name: "Alex Johnson",
            email: "alex.johnson@firm.com",
            avatar: "AJ",
            isGuest: false,
            preferencesSet: false,
        });
    }
    return getUser()!;
}

export function loginAsGuest() {
    setUser({
        name: "Guest User",
        email: "guest@preview.com",
        avatar: "GU",
        isGuest: true,
        preferencesSet: true,
    });
    return getUser()!;
}
