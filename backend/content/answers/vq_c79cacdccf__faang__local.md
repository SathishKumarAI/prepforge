---
qid: vq_c79cacdccf__faang__local
question: How do one-load multi-line records?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 584
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:08-05:00'
sources: []
---

**Clarify**  
We need a robust way to read text files where a single logical record can span several physical lines (e.g., CSVs with quoted commas or newlines). The goal is to return each record as one string or structured object, not split on every newline.

*Assumptions:*  
- Records are delimited by a specific line‑break pattern (`\n` or `\r\n`).  
- Multi‑line fields are escaped (e.g., quoted in CSV).  
- We want streaming/linear time with minimal memory overhead.

**Approach**  
1. Read the file line by line.  
2. Keep an accumulator buffer for the current record.  
3. Detect if a line ends a record or is part of one using a state machine (e.g., count opening/closing quotes).  
4. When a full record is assembled, emit it and reset the buffer.

**Depth**  
```python
def read_multiline_records(fp):
    buf = []
    in_quote = False
    for raw_line in fp:
        line = raw_line.rstrip('\n')
        # Count quotes ignoring escaped ones
        i = 0
        while i < len(line):
            if line[i] == '"':
                # look ahead for escape (double quote)
                if i+1 < len(line) and line[i+1] == '"':
                    i += 2; continue
                in_quote = not in_quote
            i += 1
        buf.append(line)
        if not in_quote:               # record boundary found
            yield '\n'.join(buf)
            buf.clear()
```
- **Complexity:** O(N) time, O(L) memory where L is the longest record.  
- **Trade‑offs:** Handles escaped quotes; fails if other escape schemes are used.

**Edge Cases**  
- Empty records (`""`).  
- Files ending without a trailing newline.  
- Nested quotes or multiline fields with different delimiters (e.g., XML).  
- Binary data containing quote characters.

Test by feeding:  
1. Simple single‑line CSVs.  
2. CSVs with quoted commas and newlines.  
3. Edge cases above.

**Optimize & Communicate**  
For huge files, replace the list `buf` with a string builder or write directly to output to avoid holding all lines in memory. If parsing into fields, integrate a streaming CSV parser (e.g., Python’s `csv` module) after record assembly. I’d explain the state machine logic clearly, show time/space trade‑offs, and demonstrate unit tests covering edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
