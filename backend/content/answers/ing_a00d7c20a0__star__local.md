---
qid: ing_a00d7c20a0__star__local
question: 'Explain: Primer: Linux filesystem concepts — Blockdiff: How we built our
  own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 371
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:17-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑storage startup we were launching an on‑prem hypervisor that needed instant snapshotting of large virtual machine disks (up to 50 GB). The existing qcow2 format was too slow for our real‑time sync requirements, and the overhead of copying whole files was killing throughput.

**Task** – Design a lightweight file format that could store incremental changes (block diffs) efficiently, support fast restore, and integrate with our Linux kernel driver without breaking POSIX semantics.

**Action** – I began by mapping the ext4 inode layout to understand how metadata blocks were referenced. I then built a custom “BlockDiff” header that stored an offset table of changed 4 KiB sectors plus CRCs for integrity. Using mmap and `ioctl` on `/dev/loop`, we wrote a C++ daemon that read the VM’s backing file, calculated SHA‑256 hashes per block, compared them to the last snapshot, and only flushed modified blocks into our diff file. The format also included a journal page so partial writes could be rolled back. I benchmarked against qcow2: restore times dropped from 12 s to 3 s for a 10 GB VM.

**Result** – The new format cut snapshot creation time by 75 % and reduced disk I/O by ~60 %. It also allowed us to support incremental backup over the network with minimal bandwidth. From this project I learned how Linux FS internals can inspire custom storage solutions, and that careful block‑level hashing is key to efficient diffing in virtualized environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
