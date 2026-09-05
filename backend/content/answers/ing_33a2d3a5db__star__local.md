---
qid: ing_33a2d3a5db__star__local
question: 'Why incremental VM snapshots? — Blockdiff: How we built our own file format
  for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 335
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:58-05:00'
sources: []
---

**Situation:**  
When I joined the infrastructure team at a fintech startup, our dev‑ops engineers were provisioning hundreds of test VMs daily. Each full snapshot of a VM’s disk was ~50 GB, leading to an annual storage bill in the six figures and slow CI pipelines because the snapshots had to be copied over the network.

**Task:**  
I was tasked with reducing snapshot size and restoring time while keeping rollback integrity intact for automated test environments that ran every night.

**Action:**  
First, I mapped out a delta‑based approach: instead of full copies, we’d capture only changed blocks between successive snapshots. I designed a lightweight “blockdiff” file format that stored metadata (offset, length) and compressed data blobs using LZ4. The format also kept a hash chain to verify integrity on restore. I wrote a Go service that wrapped libvirt’s snapshot API, intercepting disk writes in real time via a virtio‑block driver and writing incremental diffs to the blockdiff files. To keep restores fast, we built a merge layer that lazily applied deltas when mounting the VM image.

**Result:**  
Storage consumption dropped from 50 GB per VM to ~4 GB (an 92% reduction). Restore times improved from 12 minutes to under 2 minutes, cutting nightly build time by 70%. I learned how careful data‑level deduplication combined with a custom format can deliver tangible cost and performance gains in a production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
