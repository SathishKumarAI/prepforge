/**
 * The question index, kept across reloads and restarts.
 *
 * Owns: one IndexedDB object store holding a single row — the index rows and
 * the ETag they were fetched under.
 * Does NOT own: deciding whether the copy is current. That is the ETag's job and
 * the server's; this file stores what it is given and hands it back.
 *
 * IndexedDB rather than localStorage because the payload is ~3.5 MB of JSON:
 * localStorage is synchronous, so both the write and the read would block the
 * main thread at exactly the moment the page is trying to paint, and 3.5 MB is
 * close enough to the 5 MB quota that a second consumer would start evicting.
 *
 * Raw IndexedDB rather than a wrapper library. It is one store, one key, two
 * operations — a dependency for that is more code shipped, not less written.
 *
 * Every function here resolves rather than rejects on failure. A browser in
 * private mode, with storage disabled, or over quota must cost the user a slow
 * first paint, never a broken page: the caller falls back to the network, which
 * is what it did before this file existed.
 */
import type { QuestionLite } from "./api";

const DB = "prepforge";
const STORE = "index";
const KEY = "questions";
const VERSION = 1;

export interface CachedIndex {
  etag: string;
  rows: QuestionLite[];
}

function open(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    let req: IDBOpenDBRequest;
    try {
      req = indexedDB.open(DB, VERSION);
    } catch {
      return resolve(null); // storage disabled entirely
    }
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
    // Another tab holding an old VERSION open blocks the upgrade forever. Give
    // up rather than leaving the page waiting on a promise that never settles.
    req.onblocked = () => resolve(null);
  });
}

export async function readIndex(): Promise<CachedIndex | null> {
  const db = await open();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const req = db.transaction(STORE, "readonly").objectStore(STORE).get(KEY);
      req.onsuccess = () => {
        const v = req.result as CachedIndex | undefined;
        // A row with no etag cannot be revalidated, so it is worse than nothing:
        // it would paint stale forever. Treat it as a miss.
        resolve(v?.etag && Array.isArray(v.rows) && v.rows.length ? v : null);
      };
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    } finally {
      db.close();
    }
  });
}

export async function writeIndex(etag: string | null, rows: QuestionLite[]): Promise<void> {
  if (!etag || rows.length === 0) return; // see readIndex: an un-taggable copy is a trap
  const db = await open();
  if (!db) return;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put({ etag, rows } satisfies CachedIndex, KEY);
      tx.oncomplete = () => resolve();
      // Over quota lands here. Nothing to do about it and nothing to tell the
      // user: the next load simply pays for the network again.
      tx.onerror = () => resolve();
      tx.onabort = () => resolve();
    } catch {
      resolve();
    } finally {
      db.close();
    }
  });
}
