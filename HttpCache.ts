type CachedData = {
    data: any;
    ttl: number;
    timestamp: number;
}

export class HttpCache {

    private store = new Map<string, CachedData>();

    constructor () { }

    public set(key: string, data: any, ttl: number) {
        this.store.set(key, {
            data,
            ttl: ttl * 1000,
            timestamp: Date.now()
        })
    }

    public get(key: string) {
        const data = this.store.get(key);
        if(data && (data?.timestamp + data?.ttl > Date.now())) {
            return data;
        } else {
            this.invalidate(key);
            return undefined;
        }
    }

    private invalidate(key: string) {
        this.store.delete(key);
    }

}

export default HttpCache