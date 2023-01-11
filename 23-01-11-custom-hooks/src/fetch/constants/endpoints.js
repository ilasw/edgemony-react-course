export const ENDPOINTS = {
    BASE: `https://random-data-api.com/api/v2`,
    get BLOOD_TYPES() {
        return `${this.BASE}/blood_types`
    },
    get BEERS() {
        return `${this.BASE}/beers`
    }
}