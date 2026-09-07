---
qid: ing_cbd816028b__faang__local
question: 'Explain: Billions of Rows — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 469
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:10-05:00'
sources: []
---

**Clarify**  
The interview asks how *Apache HBase* handles “billions of rows.” I’d confirm we’re talking about a distributed NoSQL table that stores billions of key‑value pairs across many nodes, and that the focus is on scalability, consistency, and query patterns (point reads vs. scans).  

**Approach**  
Explain HBase’s architecture: master/region servers, split regions by rowkey, use HDFS for storage, and its binary column family model. Then describe how it achieves scale‑out: data partitioning, automatic region splitting, and load balancing via the balancer.  

**Depth**  
- **Data Model:** Sorted on a single row key; each cell is identified by (row key, column family, qualifier).  
- **Storage Engine:** HFile blocks on HDFS; write‑ahead log (WAL) ensures durability.  
- **Region Splitting:** When a region exceeds ~10 GB (configurable), it splits into two child regions—this keeps read/write hotspots distributed.  
- **Load Balancing:** Master monitors region server load and migrates regions to maintain even distribution.  
- **Consistency & Availability:** Strong consistency on single row operations; eventual consistency for multi‑row scans.  
- **Performance:** Point reads are O(log n) via block cache + Bloom filters; scans are sequential reads over HFiles.  

**Edge Cases**  
- Hotspotting: poor key design (e.g., time‑series with monotonically increasing keys). Test by inserting synthetic data and monitoring region sizes.  
- Region server failure: WAL replay on recovery—test with node kill during write bursts.  

**Optimize & Communicate**  
Suggest key‑space design (hash prefixes), enable Bloom filters, tune cache sizes, and use column families to reduce I/O. In the interview I’d frame this as “to handle billions of rows we rely on data partitioning, HDFS’s horizontal scaling, and automatic region management, while trading off strong consistency for single‑row operations against eventual consistency for multi‑row scans.” This demonstrates structured thinking, depth, and awareness of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
