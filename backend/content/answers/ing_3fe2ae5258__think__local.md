---
qid: ing_3fe2ae5258__think__local
question: 'Explain: Bulk imports with COPY [..] FROM STDIN — GitHub - lib/pq: Go PostgreSQL
  driver for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 520
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:55:42-05:00'
sources: []
---

**1. Clarify the ask & assumptions**

- The question is about *why* and *how* the `COPY … FROM STDIN` command works with the lib/pq Go driver, not just a generic PostgreSQL explanation.
- Assume the reader knows basic SQL but may be new to Go’s database/sql interface or the pq driver internals.

**2. Mental model / framework**

1. **PostgreSQL COPY protocol** – a bulk‑load mechanism that streams rows in a binary/text format over a single TCP connection.
2. **`database/sql` abstraction** – provides `Exec`, `Query`, and a `Scanner`; the pq driver implements the `driver.Conn` interface, exposing `BeginTx`, `Prepare`, etc.
3. **STDIN/STDOUT streaming** – in lib/pq this is handled by a custom `CopyIn`/`CopyOut` function that writes to the connection’s *copy* mode.

**3. Step‑by‑step reasoning**

- When you call `db.Exec("COPY table(col1,col2) FROM STDIN")`, pq parses the query and recognizes it as a COPY command.
- It switches the underlying PostgreSQL backend connection into *copy mode* by sending the `CopyIn` message (protocol message type `'c'`).
- lib/pq then provides a helper `CopyInWriter` that implements `io.Writer`. You write CSV/binary rows to this writer; pq serializes them and streams each row via the protocol’s COPY data messages.
- On completion, you close the writer, which sends the *copy done* message. PostgreSQL finalizes the import and returns a status.

**4. Common traps**

- Forgetting that `Exec` is not enough; you must use `pq.CopyIn` or manually write to the returned `io.Writer`.
- Mixing up `COPY … FROM STDIN` (client‑to‑server) vs. `COPY … TO STDOUT` (server‑to‑client).
- Not handling errors inside the writer loop – a single write error aborts the whole COPY.

**5. Sanity‑check & verbalize**

- Verify that the driver indeed entered copy mode by inspecting logs (`pg_logical` or debug output).
- Explain to peers: “We issue a COPY command, pq switches the connection into copy mode, and we stream rows via an `io.Writer`. It’s essentially a binary pipe over the same TCP socket.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
