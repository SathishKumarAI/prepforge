---
qid: vq_c79cacdccf__think__local
question: How do one-load multi-line records?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 488
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:21:00-05:00'
sources: []
---

**1. Clarify the problem and state assumptions**  
   - Identify what “multi‑line records” means: a logical record that spans several physical lines (e.g., CSV with embedded newlines, logs split by markers).  
   - Assume we have a stream or file to read from, and we need to reconstruct each logical record in memory.  
   - Decide whether the delimiter is fixed (e.g., a blank line) or implicit (e.g., quotation marks).

**2. Pick an appropriate mental model / framework**  
   - Think of the input as a *finite‑state machine* where states are “inside record” vs “outside record”.  
   - Alternatively, view it as a *streaming parser*: consume tokens until you reach the end‑of‑record marker.

**3. Step‑by‑step reasoning toward a solution**  
   1. Open the file/stream and initialize an empty buffer.  
   2. Read line by line.  
   3. Append each line to the buffer.  
   4. Check for the end‑of‑record condition (e.g., a line that matches the delimiter or a closing quote).  
   5. When detected, emit the buffer as one record and reset it.  
   6. Continue until EOF.

**4. Common traps to avoid**  
   - Forgetting to handle the last record if the file doesn’t end with a delimiter.  
   - Mis‑identifying delimiters inside quoted fields (e.g., CSV).  
   - Using string concatenation in a loop without buffering, leading to quadratic time.

**5. Sanity‑check and communicate clearly**  
   - Test on edge cases: empty records, records that contain the delimiter literally, very long records.  
   - Explain the algorithm’s time complexity (O(n) where n is total characters) and memory usage (size of one record at a time).  
   - Offer sample code snippets in the target language to illustrate the buffer‑accumulation pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
