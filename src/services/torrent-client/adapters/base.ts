export interface TorrentAdapterTorrent {
    name: string
    files: TorrentAdapterFile[]
    remove(): Promise<void>
    getDownloadSpeed(): number
    getDownloaded(): number
    getUploadSpeed(): number
    getUploaded(): number
}

export interface TorrentAdapterFile {
    name: string
    path: string
    length: number
    createReadStream(opts?: { start: number; end: number }): NodeJS.ReadableStream
    stop(): void
}

export abstract class TorrentAdapter {
    constructor() {}

    public abstract async add(magnet: string, path: string): Promise<TorrentAdapterTorrent>
}
