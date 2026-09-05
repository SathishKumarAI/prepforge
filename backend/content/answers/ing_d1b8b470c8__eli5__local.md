---
qid: ing_d1b8b470c8__eli5__local
question: 'Explain: Given a list of allowed IP ranges as CIDR blocks plus explicit
  deny ranges, implement `is_allowed(ip)` efficiently for millions of checks per second.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 262
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:33-05:00'
sources: []
---

Imagine every IP address is a house on an endless street and each CIDR block is a neighborhood sign that says “All houses inside this sign are allowed.” The deny ranges are extra fences that say “Even if you’re in a permitted neighborhood, these specific streets are still blocked.”  

To answer *is_allowed(ip)* fast, we first build a tree of the neighborhood signs (a **prefix trie**). Each node represents a common street prefix; when we walk down the tree following the bits of an IP, we keep track of the most recent sign that says “allowed.” After reaching the leaf, we check whether any deny fence (stored as exact ranges or another small tree) overlaps that address. Because the tree is balanced and each lookup touches only a few dozen nodes, it can answer millions of queries per second.  

**Unavoidable terms explained:**  
- *CIDR block*: a compact way to write a range of IP addresses using a prefix and a length (e.g., 192.168.0.0/16).  
- *Prefix trie*: a tree where each level splits the address bits, letting us find the longest matching prefix quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
