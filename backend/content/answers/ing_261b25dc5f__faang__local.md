---
qid: ing_261b25dc5f__faang__local
question: 'Explain: Monitoring — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 490
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:37-05:00'
sources: []
---

**Clarify**  
We’re asked to design a monitoring system that observes the health of services over **TCP** and **UDP** transports. Key assumptions:  
1. Services expose a lightweight heartbeat endpoint (e.g., HTTP/HTTPS or raw sockets).  
2. Latency, packet loss, and connection churn are critical metrics.  
3. We need high‑availability monitoring with minimal overhead.

**Approach**  
1. Create two probe agents—one for TCP, one for UDP—running on each host.  
2. Agents send periodic “ping” packets to the target port.  
3. For TCP: open a socket, perform a handshake, measure round‑trip time (RTT), and close.  
4. For UDP: broadcast a datagram with a sequence number; wait for an echo or ACK from the service.  
5. Aggregate metrics into a central collector via a message queue (e.g., Kafka).  
6. Store in a time‑series DB (Prometheus/Cortex) and expose PromQL dashboards.

**Depth**  
- **TCP probe**: O(1) per ping, handles connection retries, measures retransmissions and SYN‑ACK delays.  
- **UDP probe**: Uses sequence numbers to detect loss; timestamps give RTT. Since UDP is unreliable, we must tolerate missing ACKs.  
- The collector normalizes data into a common schema (service_id, timestamp, latency_ms, lost_packets).  
- Alerting rules compare latency against SLAs and detect sustained packet loss.

**Edge Cases**  
- Firewalls dropping ICMP/UDP; fallback to TCP probe.  
- Services that require authentication—embed token in payload.  
- High load causing false positives: throttle probes per host.  
- Time drift between agents—use NTP or sync via SNTP.

**Optimize & Communicate**  
To reduce overhead, batch probes and use asynchronous I/O (e.g., asyncio). For scalability, spin up a probe pod per node in Kubernetes; auto‑scale the collector based on queue depth. I’d explain trade‑offs: TCP gives reliable latency but adds handshake cost; UDP is lightweight but needs loss detection logic. This design balances accuracy, performance, and fault tolerance—key for any FAANG monitoring stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
