---
qid: vq_a2fb0dd0bf__eli5__local
question: How do you implement data masking in ADF for sensitive data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 275
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:46-05:00'
sources: []
---

Think of your data set as a big book that contains both public chapters and secret pages. **Data masking** is like putting a translucent overlay over the secret pages so anyone can read the outline but never see the hidden details.

In Azure Data Factory (ADF) you create a *Copy Activity* to move data from source to sink. To mask, add a **Derived Column transformation** in an *Mapping Data Flow*. In that step you replace the sensitive column with a new value—often a fixed string (“****”) or a hashed version—using a simple expression. The original column stays untouched; only the output stream is altered.

Key terms:  
- **ADF (Azure Data Factory)** – cloud tool for moving and transforming data.  
- **Copy Activity** – moves data between sources and destinations.  
- **Mapping Data Flow** – visual canvas where you can apply transformations like masking.  
- **Derived Column** – creates a new column value based on an expression.

When the pipeline runs, ADF reads each row, applies your masking rule in the Derived Column step, then writes the masked data to the target—just as if you had covered the secret pages before handing out the book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
