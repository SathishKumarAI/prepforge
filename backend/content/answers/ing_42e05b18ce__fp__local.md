---
qid: ing_42e05b18ce__fp__local
question: 'Explain: Log Parsing Commands — Log Parsing Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 681
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:27:01-05:00'
sources: []
---

**Why log parsing matters**

A machine‑learning pipeline starts with data, and logs are the *raw observational record* of every run.  
Logs contain timestamps, error codes, metrics, stack traces—everything a model needs to learn drift, failure modes, or performance trends.  Parsing them turns an unstructured text stream into a structured table that can be ingested by ML tools.

**Fundamental operations**

| Command | What it does | Why it works |
|---------|--------------|--------------|
| `grep <pattern>` | Filters lines matching a regex | Regex is a compact representation of the language of log tokens; greedy vs non‑greedy control over capture. |
| `awk '{print $NF}'` | Prints the last field (e.g., error code) | AWK treats whitespace as delimiters; `$NF` is “number of fields,” so it adapts to variable line lengths. |
| `sed 's/old/new/g'` | Global substitution | Sed operates on a stream, applying the same edit to every occurrence—essential for normalizing timestamps or anonymizing IPs. |
| `cut -d':' -f2` | Extracts second field using colon delimiter | Cut is linear‑time; ideal when you know the exact column, e.g., `timestamp: value`. |
| `sort | uniq -c` | Counts unique entries | Sorting groups identical lines together; `uniq -c` then tallies frequencies—necessary for feature engineering. |

**Deep insight**

Logs are *high‑entropy* signals.  By parsing them into categorical variables (e.g., error codes) you implicitly perform **information bottlenecking**: you keep only the bits that matter for prediction, discarding noise.  A non‑obvious trick is to apply a *rolling window* after `sort | uniq -c`—this turns static counts into a time‑series feature that captures concept drift without extra code.

---

**Cheat Sheet**

```bash
# 1. Extract error codes
grep "ERROR" logs.txt | awk '{print $NF}' > errors.log

# 2. Normalize timestamps to ISO format
sed -E 's/([0-9]{4})\/([0-9]{2})\/([0-9]{2}) /"\1-\2-\3T/g' logs.txt > iso_logs.txt

# 3. Count occurrences per day
cut -d'T' -f1 iso_logs.txt | sort | uniq -c > daily_counts.txt

# 4. Create rolling window (e.g., 7‑day)
awk '{print $1, $2}' daily_counts.txt | \
    awk 'BEGIN{FS=" "; OFS="\t"} {for(i=NR-6;i<NR;i++) if(i>0) sum+=a[i]; print $1,sum; sum-=a[NR-6] }' > rolling7d.tsv
```

This pipeline shows how each primitive—filter, split, substitute, count—solves a specific sub‑problem of converting noisy logs into clean, ML‑ready features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
