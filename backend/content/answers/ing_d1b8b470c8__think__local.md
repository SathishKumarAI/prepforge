---
qid: ing_d1b8b470c8__think__local
question: 'Explain: Given a list of allowed IP ranges as CIDR blocks plus explicit
  deny ranges, implement `is_allowed(ip)` efficiently for millions of checks per second.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 852
total_tokens: 1062
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:48:38-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- We receive *two* sets:  
  - **Allow list** – CIDR blocks that grant access.  
  - **Deny list** – explicit ranges (or CIDRs) that block access even if they fall inside an allow block.  
- `is_allowed(ip)` must run in sub‑microsecond time for millions of lookups per second.  
- IPs are IPv4/IPv6; assume the input is already parsed to a numeric form.  
- The lists change rarely, so we can afford expensive pre‑processing.

---

**2️⃣ Mental model / framework**

Treat it as an *interval stabbing query* with two layers:

1. **Allow tree** – fast membership test for any IP.  
2. **Deny tree** – same but higher priority (if hit → deny).  

Use a *radix trie* (prefix tree) because CIDR blocks align perfectly with bit prefixes. This gives O(1) lookup time proportional to address length (32 or 128 bits).

---

**3️⃣ Step‑by‑step reasoning**

1. **Build the Allow Trie**  
   - Insert each allow CIDR: walk down the trie according to the prefix bits, mark the node as *allowed*.  
   - Keep a flag `has_allow_ancestor` so that during lookup we can propagate allowance from parent nodes.

2. **Build the Deny Trie**  
   - Same process but mark nodes as *denied*.  

3. **Lookup algorithm**  
   ```python
   def is_allowed(ip):
       # First check deny trie – highest priority
       node = deny_root
       for bit in bits_of(ip):
           if node.deny_flag: return False
           node = node.child(bit)
           if not node: break
       else:
           if node and node.deny_flag: return False

       # Then check allow trie
       node = allow_root
       allowed = False
       for bit in bits_of(ip):
           if node.allow_flag: allowed = True
           node = node.child(bit)
           if not node: break
       else:
           if node and node.allow_flag: allowed = True

       return allowed
   ```
   - Because the deny check is first, any overlap automatically blocks.

4. **Optimizations**  
   - Store child pointers in fixed arrays (size 2 for IPv4) to avoid hash lookups.  
   - Use bit‑packed nodes or a single contiguous memory block for cache locality.  
   - Pre‑compute masks for the longest prefix match if you want to avoid per‑bit loops.

5. **Complexity**  
   - Build: O(total bits in all CIDRs).  
   - Lookup: O(address length) ≈ 32 steps (IPv4) or 128 (IPv6), which is well within a few nanoseconds on modern CPUs.

---

**4️⃣ Common traps to avoid**

- **Ignoring ancestor rules** – an IP may be allowed by a parent node even if the exact leaf isn’t marked.  
- **Overlapping CIDRs** – ensure that more specific deny blocks override less specific allow ones.  
- **Memory blow‑up** – naïve per-bit nodes can double memory; use shared subtrees where possible.  
- **IPv6 handling** – 128 bits is longer but still cheap; just be careful with data types.

---

**5️⃣ Sanity checks & communication**

- Test with a small set: insert `192.168.0.0/16` allow, deny `192.168.1.0/24`; verify that IPs in the denied range return False.  
- Benchmark on a single core to confirm < 200 ns per lookup before scaling.  
- Explain the “deny‑first” rule and why it keeps the algorithm simple: we never need to merge or sort intervals.

With this trie‑based approach, you achieve deterministic sub‑microsecond lookups while keeping memory usage modest and handling both IPv4/IPv6 efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
