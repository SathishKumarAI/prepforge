---
qid: vq_e57c6fdf23__think__local
question: What are different metadata options in GetMetadata Activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 462
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:35:14-05:00'
sources: []
---

**1. Clarify the scope and context**  
   - *What is “GetMetadata” referring to?* Assume it’s the Azure Data Factory (ADF) Get Metadata activity.  
   - *Which metadata properties are in question?* Distinguish between *properties* (file size, timestamp) and *children* (folders/files).  
   - *Assume the user wants a list of options rather than code.*

**2. Adopt a mental framework**  
   - **Categories**: *File attributes*, *Folder attributes*, *Data set properties*.  
   - For each category, list the *supported metadata keys* that the activity can retrieve.

**3. Step‑by‑step reasoning**  
   1. Recall ADF’s UI where you select “Get Metadata” → “Dataset” and then “Field list”.  
   2. Map each field back to its definition in documentation: e.g., `lastModified`, `fileSize`, `childItems`.  
   3. Group them logically: basic file info, folder info, dataset properties (like `schema`), and any custom tags.

**4. Avoid common pitfalls**  
   - Don’t conflate *metadata keys* with *dataset types*; e.g., “Table” vs “Blob”.  
   - Remember that some fields are only available for certain sinks (e.g., `schema` for SQL, not for Blob).  
   - Beware of misreading “childItems” as a property—it’s actually an array of objects.

**5. Sanity‑check & verbalize**  
   - Cross‑reference the list with official ADF docs or the activity’s “Add field” dialog.  
   - Think aloud: “If I need file size, I’ll pick `fileSize`; if I want all child names, I use `childItems`.”  
   - Confirm that each option is indeed selectable in the UI and supported by the underlying data store.

By following this structured approach you can confidently enumerate the metadata options for GetMetadata without missing any key fields or misrepresenting their availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
