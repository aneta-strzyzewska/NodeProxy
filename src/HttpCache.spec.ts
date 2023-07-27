import HttpCache from './HttpCache'

describe('HttpCache', () => {

    const cache = new HttpCache();
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    it('should return cached value', async () => {
        cache.set("test", { value: "test" }, 5);
        await delay(1500);
        expect(cache.get("test")).toEqual({ value: "test" });
    })

    it('should invalidate after time-to-live expires', async () => {
        cache.set("test", { value: "test" }, 1);
        await delay(1500);
        expect(cache.get("test")).toBe(undefined);

    })

})
