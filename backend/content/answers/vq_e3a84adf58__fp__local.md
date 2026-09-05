---
qid: vq_e3a84adf58__fp__local
question: What is a Commit ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 473
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:01:13-05:00'
sources: []
---

### Commit (in Distributed Source‑Control Systems)

A **commit** is the atomic snapshot that turns *what you have been tinkering with* into an immutable record of the project’s state at a particular instant.

---

#### Why it must exist

1. **Decoupling work from history** – You can keep editing freely; only when you decide a change is “finished” do you push its metadata (author, timestamp, message) and the new tree of objects into the repository.
2. **Consistent branching** – Each commit has exactly one parent (except the root). This linear lineage lets the system reconstruct *any* branch by following pointers, without needing to store a diff for every file or run expensive recomputation each time.

#### How it works from first principles

- **Objects as immutable digests.**  
  Every file content and directory tree is hashed (e.g., SHA‑1). The commit stores the root tree hash plus metadata. Because hashes are collision‑resistant, any change yields a new digest; no in‑place mutation can corrupt history.

- **Delta‑free storage + delta‑encoding on disk.**  
  The repository keeps all objects (blobs and trees) once each. When two commits share the same file, they reference the same blob hash, so space is saved automatically—this follows from *information theory* (identical data need not be stored twice).

- **Reference counting for garbage collection.**  
  A commit “points” to objects; when no commit references an object, it becomes unreachable and can be purged. This satisfies the principle of *minimal persistence*: only what is explicitly committed survives.

#### Non‑obvious insight

A commit’s **message is not part of the immutable hash**. It lives in a separate mutable index (the reflog). Thus you can rewrite history (e.g., `git rebase`) without changing the underlying objects, yet still preserve integrity: the tree and blobs stay the same; only the parent links and metadata change. This separation lets developers experiment with rewriting while keeping the repository’s content safe—a subtle but powerful design choice rooted in *separation of concerns* between data and its provenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
