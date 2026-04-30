# Summaries

## Chapter 1: Introduction to Computer Networks & the Internet
### 📖 Quick Summary
Computer networks connect devices worldwide, enabling them to share data. Imagine the internet as a massive postal system. The **Network Edge** (your devices) sends letters (data). The **Network Core** (routers) acts like the sorting facilities and transport trucks. Everything is governed by **Protocols**, which are just rules defining how the letters must be formatted and delivered.

### 🔑 Key Concepts & Definitions
- **End Systems (Hosts)**: Devices like laptops, smartphones, and web servers that sit at the "edge" of the network.
- **Protocols**: Rules governing the format and order of messages exchanged between two or more communicating entities (e.g., TCP, IP, HTTP).
- **Packet Switching**: Data is broken into small chunks (packets) and sent over shared lines. Resources are used on demand (Statistical Multiplexing).
- **Circuit Switching**: A dedicated path (like a phone line) is reserved for the entire duration of the communication. No sharing occurs.
- **Store-and-Forward**: Routers must receive the *entire* packet before they can begin forwarding it to the next hop.

### 🧠 Important Models
- **OSI Model (7 Layers)**: Application, Presentation, Session, Transport, Network, Data Link, Physical. (Mnemonic: *All People Seem To Need Data Processing*).
- **TCP/IP Model (5 Layers)**: Application, Transport, Network, Link, Physical. This is the practical model used on the modern internet.

### 💡 Examples & Memory Tips
- **Analogy for Protocols**: Think of human protocols. "Hi" -> "Hello" -> "What is the time?" -> "2:00 PM". If computers don't speak the same protocol, they cannot understand each other.
- **Packet vs Circuit Switching**: Packet switching is like a busy restaurant that doesn't take reservations (shared, sometimes you wait in queue). Circuit switching is a restaurant where you reserved a table in advance (guaranteed space, but inefficient if you leave it empty).

### 📐 Important Formulas
- **Transmission Delay**: $L / R$ 
  *(Where L is Packet Length in bits, and R is Link Transmission Rate in bits/sec)*
- **End-to-End Delay (Store-and-Forward)**: $N * (L / R)$ 
  *(Where N is the number of links)*

### 🎯 Likely Exam Questions
- **Q**: What are the four sources of packet delay?
  **A**: 1) Nodal Processing, 2) Queuing, 3) Transmission, 4) Propagation.
- **Q**: Differentiate between Routing and Forwarding.
  **A**: **Routing** is global (planning the whole trip). **Forwarding** is local (moving a packet from the router's input to the correct output).

### ✅ Chapter 1 Revision Checklist
- [ ] Understand Network Edge vs Core.
- [ ] Differentiate Packet and Circuit Switching.
- [ ] List the 5 layers of the TCP/IP stack.
- [ ] Calculate basic transmission delay.

---

## Chapter 2: The Application Layer
### 📖 Quick Summary
This layer is where network applications and their application-layer protocols reside. It's the only layer the average user interacts with. This is where your web browser (HTTP), email client (SMTP), and file downloader (FTP) operate.

### 🔑 Key Concepts & Definitions
- **Client-Server Architecture**: Always-on server handles requests from intermittently connected clients (e.g., Web, Email).
- **P2P Architecture**: No always-on server. End systems (peers) directly communicate (e.g., BitTorrent). Highly scalable but harder to manage.
- **Socket**: The "door" between the application process and the transport layer protocol.
- **Port Numbers**: Used to identify specific processes on a host (e.g., Port 80 = HTTP, Port 25 = SMTP).

### 🧠 Important Protocols
- **HTTP (HyperText Transfer Protocol)**: Stateless protocol for the Web. Uses TCP.
- **DNS (Domain Name System)**: Translates human-readable hostnames (www.mit.edu) to IP addresses (18.9.22.69). Uses UDP.
- **SMTP (Simple Mail Transfer Protocol)**: Pushes email from the sender to the mail server. Uses TCP.

### 💡 Examples & Memory Tips
- **Sockets Analogy**: If an IP address is the street address of an apartment building, the **Port Number** is the specific apartment number. The **Socket** is the door to that apartment.
- **HTTP is Stateless**: The server forgets you the moment the transaction is done. **Cookies** were invented to keep state (like keeping you logged in).

### 🎯 Likely Exam Questions
- **Q**: Why does DNS use UDP instead of TCP?
  **A**: DNS requests are small and need to be fast. The overhead of setting up a TCP connection (3-way handshake) would introduce too much delay.
- **Q**: Distinguish between persistent and non-persistent HTTP.
  **A**: **Non-persistent** opens a new TCP connection for every single object (high overhead). **Persistent** leaves the connection open for multiple requests.

### ✅ Chapter 2 Revision Checklist
- [ ] Compare Client-Server and P2P architectures.
- [ ] Understand Socket addressing (IP + Port).
- [ ] Know the difference between SMTP (push) and POP3/IMAP (pull).
- [ ] Explain how DNS resolution works.

---

## Chapter 3: The Transport Layer
### 📖 Quick Summary
The transport layer provides **logical communication** between application *processes* running on different hosts. If the network layer moves a letter from house to house, the transport layer makes sure it gets to the specific person inside the house.

### 🔑 Key Concepts & Definitions
- **Multiplexing / Demultiplexing**: Gathering data from multiple sockets and adding transport headers (Multiplexing) and delivering received segments to the correct socket based on Port Numbers (Demultiplexing).
- **UDP (User Datagram Protocol)**: Connectionless, unreliable, "best-effort". Fast but risky.
- **TCP (Transmission Control Protocol)**: Connection-oriented, reliable, in-order delivery. Features Flow Control and Congestion Control.

### 🧠 Important Mechanisms
- **TCP 3-Way Handshake**: 
  1) Client sends SYN. 
  2) Server replies SYN-ACK. 
  3) Client replies ACK. (Establishes connection).
- **Reliable Data Transfer (RDT)**: Uses **Checksums** (detect errors), **ACKs** (confirm receipt), **Sequence Numbers** (detect duplicates), and **Timers** (recover from loss).
- **Go-Back-N (GBN) vs Selective Repeat (SR)**: GBN retransmits the *entire* window of unacknowledged packets if one is lost. SR only retransmits the *specific* lost packet.

### 💡 Examples & Memory Tips
- **TCP vs UDP Analogy**: TCP is a certified mail delivery where you must sign for the package (ACK). UDP is throwing a newspaper at the porch from a moving car (hope it gets there, but it's fast).

### 🎯 Likely Exam Questions
- **Q**: What is the difference between Flow Control and Congestion Control in TCP?
  **A**: **Flow Control** prevents the sender from overwhelming the *receiver's* buffer. **Congestion Control** prevents the sender from overwhelming the *network's* core routers.
- **Q**: Explain the TCP Fast Retransmit mechanism.
  **A**: If a sender receives 3 duplicate ACKs for the same packet, it assumes the packet was lost and retransmits it immediately without waiting for the timer to expire.

### ✅ Chapter 3 Revision Checklist
- [ ] Explain Multiplexing and Demultiplexing.
- [ ] Compare TCP and UDP characteristics.
- [ ] Map out the TCP 3-Way Handshake.
- [ ] Understand GBN vs Selective Repeat.

---

## Chapter 4: The Network Layer (Data Plane & Control Plane)
### 📖 Quick Summary
The network layer moves packets from a sending host to a receiving host. It consists of the **Data Plane** (the local, per-router function of forwarding packets) and the **Control Plane** (the network-wide logic that calculates the routes).

### 🔑 Key Concepts & Definitions
- **Datagram**: The name of the packet at the network layer.
- **IPv4 vs IPv6**: IPv4 uses 32-bit addresses (running out). IPv6 uses 128-bit addresses (future-proof) and has a simplified header for faster processing.
- **Subnetting & CIDR**: Classless Inter-Domain Routing allows flexible allocation of IP addresses (e.g., \`/24\` means the first 24 bits are the network ID).
- **DHCP**: Dynamic Host Configuration Protocol. Automatically assigns IP addresses to devices joining a network. (Plug-and-play).
- **NAT**: Network Address Translation. Allows multiple devices on a local network to share a single public IP address.

### 🧠 Routing Algorithms (Control Plane)
- **Link-State (Dijkstra)**: Every router has the complete map of the network topology. Fast convergence but high overhead. (e.g., OSPF).
- **Distance-Vector (Bellman-Ford)**: Routers only know the distance to their immediate neighbors. Iterative, slower, suffers from "count-to-infinity". (e.g., BGP, RIP).

### 💡 Examples & Memory Tips
- **DHCP DORA Process**: **D**iscover, **O**ffer, **R**equest, **A**ck. (Memory trick: Dora the Explorer finds an IP address).
- **NAT Analogy**: NAT is like a receptionist at an office. All mail from the outside goes to the receptionist's address. The receptionist then translates and forwards it to the correct internal employee (local IP).

### 🎯 Likely Exam Questions
- **Q**: How does a router determine where to forward a packet?
  **A**: It examines the destination IP address, uses Longest Prefix Matching against its Forwarding Table, and switches the packet to the corresponding output port.
- **Q**: What is the purpose of the TTL (Time To Live) field in an IPv4 header?
  **A**: It prevents packets from looping endlessly in the network. Decremented by 1 at each router; if it hits 0, the packet is dropped.

### ✅ Chapter 4 Revision Checklist
- [ ] Differentiate Data Plane (Forwarding) vs Control Plane (Routing).
- [ ] Understand NAT and DHCP operations.
- [ ] Compare Link-State vs Distance-Vector algorithms.
- [ ] Calculate a Subnet using CIDR notation.

---

## Chapter 5: Data Link Layer & LANs
### 📖 Quick Summary
While the Network Layer moves packets end-to-end, the **Data Link layer** moves frames node-to-node across a single direct physical link.

### 🔑 Key Concepts & Definitions
- **MAC Address**: Media Access Control. A 48-bit physical address burned into the NIC (Network Interface Card). It never changes.
- **ARP (Address Resolution Protocol)**: Translates an IP address (Network layer) into a MAC address (Link layer).
- **CSMA/CD**: Carrier Sense Multiple Access with Collision Detection. Used in Ethernet. "Listen before transmitting. If a collision occurs, stop, wait a random time, and try again."

### 🧠 Important Mechanisms
- **Error Detection**: Uses parity checks, Checksums, or CRC (Cyclic Redundancy Check) to ensure the frame wasn't corrupted over the physical wire.
- **VLANs (Virtual LANs)**: Logically separating a single physical switch into multiple isolated virtual networks.

### 💡 Examples & Memory Tips
- **IP vs MAC Analogy**: An IP address is like your postal address (it changes when you move). A MAC address is like your Social Security Number (it stays with you forever).
- **ARP Process**: "Who has IP 192.168.1.5? Tell 192.168.1.1". The host with that IP replies with its MAC address.

### 🎯 Likely Exam Questions
- **Q**: Why do we need both IP addresses and MAC addresses?
  **A**: IP addresses provide global, hierarchical routing across multiple networks. MAC addresses provide flat, local delivery across a single physical link.
- **Q**: What does a switch do if it doesn't know the destination MAC address of a frame?
  **A**: It "floods" the frame out of all ports except the port it arrived on.

### ✅ Chapter 5 Revision Checklist
- [ ] Explain the difference between MAC and IP addresses.
- [ ] Understand the ARP request/reply broadcast process.
- [ ] Describe the function of CSMA/CD in Ethernet.
- [ ] Explain how a Switch builds its MAC address table.

---

## Chapter 6: Network Security (Fundamentals)
### 📖 Quick Summary
Network security ensures that data is **Confidential** (only sender/receiver can read), has **Integrity** (not altered), and provides **Authentication** (verifying identities).

### 🔑 Key Concepts & Definitions
- **Symmetric Encryption**: Same key used for both encryption and decryption (e.g., AES). Fast but key distribution is hard.
- **Asymmetric (Public Key) Encryption**: Two keys. Encrypt with Public Key, Decrypt with Private Key (e.g., RSA). Slow but solves the key distribution problem.
- **Digital Signatures**: Encrypting a document hash with your *Private Key*. Anyone can decrypt it with your Public Key to verify *you* wrote it.
- **Firewalls**: Inspect traffic entering/leaving the network and block it based on predefined rules (Packet Filtering, Stateful Inspection).

### 🧠 Important Protocols
- **TLS/SSL (Transport Layer Security)**: Provides confidentiality and data integrity over TCP. Forms the "S" in HTTPS.
- **IPsec**: Secures data at the Network Layer (used heavily in VPNs).

### 💡 Examples & Memory Tips
- **Public Key Analogy**: A Public Key is like an open padlock you hand to everyone. Anyone can snap it shut on a box (encrypt), but only YOU have the physical key to unlock it (Private Key).

### 🎯 Likely Exam Questions
- **Q**: How does a Certificate Authority (CA) prevent Man-in-the-Middle attacks?
  **A**: A CA digitally signs an entity's Public Key, vouching for its authenticity. This guarantees the client is encrypting data for the real server, not an attacker.
- **Q**: Differentiate between a virus and a worm.
  **A**: A **virus** requires human interaction to execute and spread (e.g., opening an attachment). A **worm** is self-replicating and spreads across the network automatically.

### ✅ Chapter 6 Revision Checklist
- [ ] Compare Symmetric vs Asymmetric encryption.
- [ ] Explain how Digital Signatures provide integrity and authentication.
- [ ] Understand the role of a Certificate Authority.
- [ ] Define the basic functions of a Firewall.

---

## ⚡ FINAL CRASH REVISION GUIDE (The "Night Before" Review)
### The 5-Layer Internet Stack
1. **Application**: Messages (HTTP, SMTP, DNS). Identifies processes via Ports.
2. **Transport**: Segments (TCP, UDP). Provides logical process-to-process communication.
3. **Network**: Datagrams (IPv4, IPv6, OSPF, BGP). Provides logical host-to-host routing.
4. **Link**: Frames (Ethernet, WiFi). Provides node-to-node transfer over a single link. Uses MAC addresses.
5. **Physical**: Bits. Moving signals over wires, fiber, or airwaves.

### The 4 Major Delay Sources
1. **Processing**: Checking bit errors, determining output link.
2. **Queuing**: Waiting at the output link for transmission (depends on congestion).
3. **Transmission**: Pushing bits onto the wire ($L/R$).
4. **Propagation**: Time for a bit to physically travel the wire ($Distance / Speed of Light$).

### Critical Distinctions to Memorize
- **TCP vs UDP**: Reliable/In-Order/Congestion Control vs. Fast/Unreliable.
- **Routing vs Forwarding**: Global path calculation vs Local input-to-output switching.
- **Link-State vs Distance-Vector**: Global topology map (Dijkstra) vs Neighbor-only distance info (Bellman-Ford).
- **IP vs MAC**: Hierarchical/Global (Routing) vs Flat/Local (Switching).

### Core Acronyms
- **DHCP**: Dynamic Host Configuration Protocol (IP leasing).
- **NAT**: Network Address Translation (Local to Public IP translation).
- **ARP**: Address Resolution Protocol (IP to MAC mapping).
- **DNS**: Domain Name System (Hostname to IP mapping).
