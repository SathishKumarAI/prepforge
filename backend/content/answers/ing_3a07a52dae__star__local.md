---
qid: ing_3a07a52dae__star__local
question: When would you ask for JSON, XML tags, or markdown as your output format?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 322
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:41-05:00'
sources: []
---

**Situation** – While leading the data‑exchange feature for a cross‑platform analytics dashboard, we had to deliver event logs from a mobile SDK to our backend and also expose them to third‑party developers via an API.

**Task** – Decide on a serialization format that balances machine‑readability, ease of debugging, and compatibility with existing tooling, while keeping payload size minimal for mobile users.

**Action** – I first profiled the log structure: it was nested, included timestamps, enums, and optional fields. For internal SDK–backend communication I chose **JSON** because it maps directly to our JavaScript/TypeScript models, has built‑in compression support in HTTP/2, and is lightweight for mobile payloads. For the public API, where developers often consume data with various languages, I switched to **XML** with custom tags (`<event>`, `<payload>`) to provide clear schema definitions via XSD, enabling IDE auto‑completion and easier validation in enterprise environments. Finally, for documentation and quick manual inspection, I exposed a **Markdown** preview of sample payloads on the developer portal, leveraging fenced code blocks for readability.

**Result** – The SDK’s upload latency dropped 30 % due to JSON’s smaller size; API adoption grew by 45 % because XML support satisfied enterprise clients. I learned that choosing output formats is about matching format strengths to stakeholder needs and that a hybrid strategy can satisfy diverse ecosystems without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
