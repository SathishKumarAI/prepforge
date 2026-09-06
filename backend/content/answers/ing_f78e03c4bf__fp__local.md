---
qid: ing_f78e03c4bf__fp__local
question: 'Explain: Search engine — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 578
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:11-05:00'
sources: []
---

**Why a crawler must exist**

A search engine’s *knowledge base* is the set of URLs it can answer queries about.  
The Web is an enormous, constantly evolving directed graph whose nodes are pages and edges are hyperlinks.  
To build a useful index we need **coverage** (visit as many relevant nodes as possible) and **freshness** (re‑fetch when content changes).  
Thus the crawler solves two fundamental problems:

1. *Graph exploration* – discover new nodes via outgoing links, subject to limited bandwidth and politeness constraints.
2. *Dynamic sampling* – decide how often to revisit a node given its importance.

These are classic **bandit** and **multi‑armed bandit with delayed rewards** problems: each fetch is an arm pull that yields a reward (new pages discovered or updated content). The goal is to maximize cumulative knowledge under a budget.

---

### Core architecture

| Layer | Function | Design choice |
|-------|----------|---------------|
| URL frontier | Queue of pending URLs | **Priority queue by *relevance* score** (e.g., page rank estimate, domain authority) |
| Fetcher | HTTP GETs with retry/back‑off | Respect `robots.txt`, use exponential back‑off; parallel workers per host to avoid overload |
| Parser & extractor | HTML → text + outgoing links | Robust tokenization; canonicalise URLs; detect duplicate content (hashing) |
| Scheduler | Decides next URL | **Dynamic re‑ranking**: after each fetch, update page rank estimate using link graph and recency weight |
| Storage | Persistent index | Sharded inverted index; metadata store for crawl frontier state |

---

### Non‑obvious insight

Most designs treat the frontier as a static priority queue.  
In reality, *link structure is itself dynamic*: when you discover a new high‑rank page, it changes the estimated rank of all its ancestors.  
By **incrementally updating PageRank** on the fly (e.g., using approximate power iteration) and feeding those scores back into the frontier, the crawler self‑organises around emerging hubs—essentially performing *online graph centrality estimation* without a full re‑crawl.

---

### Summary

A web crawler is an online optimisation problem: explore a massive directed graph with limited resources while keeping the index fresh.  
Its architecture balances **graph theory** (link structure), **probability** (bandit scheduling), and **information theory** (entropy of discovered content). The subtle, often overlooked trick—dynamic PageRank‑guided prioritisation—lets it focus on the most informative parts of the Web as they evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
