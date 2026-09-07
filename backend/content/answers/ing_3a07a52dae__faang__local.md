---
qid: ing_3a07a52dae__faang__local
question: When would you ask for JSON, XML tags, or markdown as your output format?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 408
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:12-05:00'
sources: []
---

**Clarify**  
The interviewer asks when to choose JSON, XML, or Markdown as an output format. I’ll confirm the constraints:  
- *Interoperability*: is the consumer a machine or a human?  
- *Schema needs*: do we require strict typing or extensibility?  
- *Data size & performance*: does payload size matter?  
- *Tooling*: what parsers/libraries are available in the target ecosystem?

**Approach**  
1. Map each format’s strengths to the above constraints.  
2. Decide based on who consumes and how the data will evolve.  
3. Validate with a quick prototype or sample payload.

**Depth**  
- **JSON**: lightweight, native to JavaScript/REST APIs, easy to parse in most languages. Use when data is hierarchical but schema‑free, and speed matters (e.g., microservices).  
- **XML**: verbose, supports namespaces, schemas (XSD), digital signatures, and mixed content. Choose for legacy enterprise integrations, document‐heavy workflows, or when strict validation is required.  
- **Markdown**: human‑readable markup, great for documentation, reports, or UI rendering in web apps. Emit Markdown when the output will be displayed directly to users or embedded in README/Docs.

**Edge Cases**  
- Large binary blobs → embed Base64 (JSON/XML) or use attachments.  
- Security: avoid XML external entity attacks; validate schemas.  
- Mixed consumer types: expose a JSON API and generate Markdown docs from the same data source.

**Optimize & Communicate**  
Explain trade‑offs succinctly, e.g., “JSON gives us 30 % smaller payloads but lacks built‑in schema enforcement, whereas XML is heavier but guarantees contract integrity.” Conclude by summarizing: *JSON for machine APIs, XML for strict enterprise contracts, Markdown for human‑facing content.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
