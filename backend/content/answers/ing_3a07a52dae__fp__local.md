---
qid: ing_3a07a52dae__fp__local
question: When would you ask for JSON, XML tags, or markdown as your output format?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 333
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:08:04-05:00'
sources: []
---

When the *semantic role* of the response dictates how it will be consumed downstream, you choose a format that preserves that role most naturally.

1. **Data‑to‑data pipelines (JSON/XML)**  
   The problem is to transmit structured information between heterogeneous systems while keeping type safety and schema compliance.  
   - JSON is chosen when the target consumer expects an object graph in a language‑agnostic, lightweight form; it maps directly to native data structures in most programming languages.  
   - XML wins when you need *document* semantics (namespaces, mixed content, validation against XSD) or legacy systems that rely on XPath/XSLT.  

2. **Human‑readable documentation (Markdown)**  
   Here the objective is readability and easy conversion to HTML, PDF, or slides. Markdown’s minimal syntax encodes emphasis, lists, code blocks, and links without imposing a rigid schema, allowing editors to tweak content freely.

**Non‑obvious insight:**  
The choice should be driven by *the ultimate consumer’s parsing strategy*, not just the data’s structure. For example, if a downstream service uses an HTTP API that accepts JSON but also supports `application/json+ld` for linked data, you might output plain JSON enriched with RDFa attributes rather than switching to XML—because the consumer already knows how to interpret those annotations. Thus, think of format selection as *matching the consumer’s native parsing paradigm* rather than matching the producer’s internal representation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
