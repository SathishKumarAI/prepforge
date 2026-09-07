---
qid: ing_d1ea471e03__faang__local
question: 'Explain: Databases — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 825
total_tokens: 1059
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:48:40-05:00'
sources: []
---

## Clarify  
The interviewer wants us to compare **TCP** (Transmission Control Protocol) and **UDP** (User Datagram Protocol) as transport layers for database systems, and how that choice impacts system‑design decisions (latency, reliability, consistency, fault tolerance).  
*Assumptions I’d confirm:*  
- The databases are distributed across data centers.  
- We’re focusing on inter‑node replication/coordination traffic, not client‑app queries.  
- Reliability of the underlying network is *not guaranteed*.

## Approach  
1. List TCP vs UDP core properties.  
2. Map each property to database concerns (reliability, ordering, throughput).  
3. Outline typical design patterns that use either protocol.  
4. Discuss trade‑offs and mitigation strategies.

## Depth  

| Property | TCP | UDP | Database Impact |
|----------|-----|-----|-----------------|
| **Connection** | Stateful, handshake (SYN/ACK) | Stateless, no handshake | TCP needs connection setup overhead; UDP can send without pre‑established link. |
| **Reliability** | Guaranteed delivery via ACKs & retransmission | No guarantee – packets may be lost | Replication protocols that require exact data transfer (e.g., Raft logs) favor TCP. |
| **Ordering** | In‑order delivery | Out‑of‑order possible | Ordering is critical for write‑ahead logs; UDP needs application‑level sequencing. |
| **Congestion Control** | Slow‑start, congestion avoidance | None | TCP adapts to network load, preventing packet loss bursts that would otherwise corrupt replication streams. |
| **Throughput** | Slightly lower due to ACK overhead | Higher raw throughput | For bulk data transfer (e.g., sharding), UDP can be advantageous if we add reliability layers. |

### Typical Patterns  
- **Transactional Replication (e.g., MySQL GTID, PostgreSQL WAL)** – uses TCP; the guarantees are essential for ACID consistency.  
- **Log Shuffling / Gossip** – some systems use UDP with custom ACKs to reduce latency, e.g., Cassandra’s gossip protocol.  
- **Bulk Data Migration** – tools like `rsync` over SSH (TCP) vs. `scp` or even `netcat` over UDP for speed, but they add their own reliability.

### Trade‑offs & Mitigations  
| Issue | Using TCP | Using UDP |
|-------|-----------|----------|
| **Latency** | Handshake + ACKs increase round‑trip time | Lower latency; suitable for high‑frequency heartbeats. |
| **Packet Loss** | Retransmitted automatically | Must implement application‑level retransmission (e.g., sequence numbers, checksums). |
| **Scalability** | Connection limits per node | Statelessness scales better but requires careful flow control. |

## Edge Cases  
- **Network partitions:** TCP may stall if ACKs are never received; UDP can continue sending, risking data inconsistency unless the application detects gaps.  
- **High jitter environments (satellite links):** TCP’s congestion window shrinks dramatically; a UDP‑based log transport with selective retransmission could maintain throughput.  
- **Security:** TLS/SSL works over TCP; for UDP you need DTLS – adds complexity.

## Optimize & Communicate  
I’d recommend defaulting to **TCP for core replication and transaction logs** because the correctness guarantees outweigh the latency penalty. For non‑critical, high‑frequency metadata (e.g., heartbeat, gossip), **UDP with lightweight ACKs** can reduce load on the network fabric. If we must use UDP in a critical path, design an *application‑level reliability layer* that mirrors TCP’s semantics but is tuned for our specific traffic pattern.

This structured trade‑off analysis demonstrates clear reasoning, acknowledges practical constraints, and offers actionable design guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
