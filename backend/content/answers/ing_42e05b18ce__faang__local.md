---
qid: ing_42e05b18ce__faang__local
question: 'Explain: Log Parsing Commands — Log Parsing Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 508
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:41-05:00'
sources: []
---

**Clarify**  
You want a concise reference for turning raw log lines into structured data—i.e., extracting fields (timestamp, level, message, IP, etc.) using shell utilities. I’ll assume we’re working with text logs on Linux and need quick‑look or automation scripts.

**Approach**  
1. Identify the delimiter/format (space, tab, JSON).  
2. Use `awk` for column extraction, `sed` for regex replacements, `grep`/`egrep` for filtering, and `jq` for JSON.  
3. Build reusable snippets: timestamp → `cut -d' ' -f1`, level → `{print $2}`, IP → `/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/`.  
4. Pipe them into a CSV or JSON output for downstream ML ingestion.

**Depth**  
| Command | Purpose | Example |
|---------|---------|---------|
| `awk '{print $1,$3}' file.log` | Grab columns 1 & 3 | timestamp + message |
| `sed -n '/ERROR/p' file.log` | Filter lines containing ERROR | `grep -i error` |
| `cut -d',' -f2,5 file.csv` | Delimiter‑based slice | extract fields 2 and 5 |
| `jq '.timestamp,.level,.msg' logs.jsonl` | JSON extraction | stream‑parse |
| `awk -F':' '{print $1,$NF}'` | Split on colon, keep first & last | user:ip |

Chain them:  
```bash
grep 'ERROR' access.log | awk '{print $1,$3}' | sed 's/://g'
```

**Edge Cases**  
- Multi‑line logs → use `sed -z` or `awk NF==0`.  
- Escaped delimiters → escape with `\|`.  
- Large files → `split` + parallel processing.  
- Non‑ASCII → set locale (`LC_ALL=C`).  

**Optimize & Communicate**  
Use streaming tools to avoid loading entire files; profile with `time`. Document each snippet in a shared cheat sheet and add comments for maintainability. This modular approach scales from simple grep to complex JSON parsing, fitting the FAANG emphasis on clean, reusable code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
