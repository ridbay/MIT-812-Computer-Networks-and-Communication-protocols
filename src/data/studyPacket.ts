/* eslint-disable no-useless-escape */
export const studyPacketRaw = `# MIT812: COMPUTER NETWORKS AND COMMUNICATION PROTOCOLS

## Sources Covered

- Network Architectures
- Physical and Data Link Layers
- Network Layer Protocols
- Transport Layer (TCP vs UDP)
- Application Layer Protocols
- Network Security Fundamentals

---

# 1) Combined Overview

## Exam Structure
- **Multiple Choice**: 20 questions (20%)
- **Short Answers**: 5 questions (30%)
- **Detailed Essays**: 2 questions (50%)

## Key Study Tips
- Focus on the OSI model and TCP/IP stack mapping.
- Understand the difference between IPv4 and IPv6 headers.
- Be ready to calculate subnet masks and CIDR notation.
- Memorize key protocols: HTTP, DNS, DHCP, BGP, and OSPF.

---

# Summaries

## Chapter 1: Foundations & Network Architectures
### Quick Summary
Computer networks consist of the **Network Edge** (hosts/end systems) and the **Network Core** (routers/switches). Communication is governed by **Protocols**. Data is moved via **Packet Switching** (on-demand) or **Circuit Switching** (reserved).

### Detailed Explanation
- **Network Edge**: End systems like PCs, smartphones, and IoT devices. They run applications.
- **Network Core**: A mesh of interconnected routers. Packet switching uses 'Store-and-Forward' transmission—the router must receive the entire packet before forwarding.
- **Circuit Switching**: Traditional telephony. A dedicated path (circuit) is reserved. No sharing. Guaranteed performance but inefficient for bursty data.
- **Packet Switching**: Statistical multiplexing. Resources are shared on demand. Can handle more users but leads to queuing and packet loss.
- **Delays**: 
  - *Processing*: Checking bit errors, determining output link.
  - *Queuing*: Waiting for the output link (depends on congestion).
  - *Transmission*: Time to push bits onto the wire (L/R).
  - *Propagation*: Time for a bit to travel the distance (d/s).

### Real-World Example
**Circuit Switching** is like a reserved HOV lane on a highway—only you can use it, even if you aren't driving. **Packet Switching** is like the general lanes—everyone shares, but you might hit traffic (congestion) at peak hours.

### Visual Representation (ASCII Diagram)
\`\`\`text
[Host A] ---- (L/R) ----> [Router] ---- (d/s) ----> [Host B]
   ^                         ^                         ^
(Edge)                    (Core)                    (Edge)
\`\`\`

### Exam Focus
- **Possible Question**: Define the four components of nodal delay and explain which one varies with network load.
- **Answer**: The four components are processing, queuing, transmission, and propagation. **Queuing delay** is the only one that varies significantly with network load (traffic intensity).

### Common Mistakes
- Confusing **Transmission Delay** (bits into the wire) with **Propagation Delay** (bits moving through the wire).
- Thinking that the Network Core runs application-level protocols. It only handles routing and forwarding.

### Practice Questions
- **Scenario**: A packet of 1000 bits is sent over a 10km link with a transmission rate of 10Mbps. The speed of light in the medium is 2 x 10^8 m/s. Calculate the total delay (ignore processing and queuing).
- **Correct Answer**: 
  - d_trans = 1000 / 10,000,000 = 0.0001s = 100 microseconds.
  - d_prop = 10,000 / (2 x 10^8) = 0.00005s = 50 microseconds.
  - Total = 150 microseconds.

---

## Chapter 2: The Application Layer
### Quick Summary
The top layer where user applications live. Uses **Client-Server** or **P2P** architectures. Key protocols include **HTTP** (Web), **SMTP** (Email), and **DNS** (Naming).

### Detailed Explanation
- **Client-Server**: Central server handles requests from many clients. Server must have a fixed, well-known IP.
- **P2P (Peer-to-Peer)**: Decentralized. Peers communicate directly. Self-scalable but harder to manage/secure.
- **HTTP**: Stateless protocol. Uses TCP (Port 80). Persistent vs. Non-persistent connections.
- **DNS**: A distributed, hierarchical database. Translates hostnames (google.com) to IP addresses.
- **Email Protocols**: 
  - **SMTP**: For sending/transferring mail (Push).
  - **POP3/IMAP**: For retrieving mail (Pull).

### Real-World Example
When you browse a website, your browser (Client) sends an **HTTP GET** request to the web server. Before this, it used **DNS** to find the server's IP.

### Visual Representation (ASCII Diagram)
\`\`\`text
[Browser] --(DNS Query)--> [Local DNS Server]
[Browser] <--(IP Address)-- [Local DNS Server]
[Browser] --(HTTP GET)--> [Web Server]
\`\`\`

### Exam Focus
- **Possible Question**: Why is HTTP called a 'stateless' protocol, and how do websites track user sessions?
- **Answer**: HTTP is stateless because the server doesn't remember past requests. Websites use **Cookies** (header fields) to maintain state across multiple requests.

### Common Mistakes
- Thinking SMTP is used to download emails from a server (that's POP3/IMAP).
- Confusing Iterative and Recursive DNS queries.

### Practice Questions
- **Scenario**: A user wants to share a large file with 100 friends. Compare the time taken using Client-Server vs P2P.
- **Correct Answer**: In P2P, the distribution time is lower because every peer that receives a part of the file can help upload it to others (Self-scalability).

---

## Chapter 3: The Transport Layer
### Quick Summary
Provides **logical communication between processes**. Main protocols: **UDP** (Connectionless, Unreliable) and **TCP** (Connection-oriented, Reliable).

### Detailed Explanation
- **UDP (User Datagram Protocol)**: "Best-effort" delivery. Low overhead. Used for streaming, DNS, VoIP.
- **TCP (Transmission Control Protocol)**:
  - **Three-way Handshake**: SYN -> SYN-ACK -> ACK.
  - **Flow Control**: Prevents sender from overwhelming receiver (via 'Receive Window').
  - **Congestion Control**: Prevents sender from overwhelming the network (via 'Congestion Window').
  - **Reliability**: Uses Sequence numbers, ACKs, and Retransmissions (Fast Retransmit after 3 duplicate ACKs).

### Real-World Example
**UDP** is like a postcard—you send it and hope it arrives. **TCP** is like a certified letter—the receiver must sign for it, and you get confirmation it arrived.

### Visual Representation (ASCII Diagram)
\`\`\`text
TCP Handshake:
Client --(SYN)--> Server
Client <--(SYN-ACK)-- Server
Client --(ACK)--> Server
\`\`\`

### Exam Focus
- **Possible Question**: Describe the phases of TCP Congestion Control.
- **Answer**: 
  1. **Slow Start**: Exponential growth of cwnd.
  2. **Congestion Avoidance**: Linear growth after reaching threshold.
  3. **Fast Recovery**: Response to packet loss (duplicate ACKs).

### Common Mistakes
- Thinking TCP/UDP run on routers. They are end-to-end (Layer 4).
- Confusing **Flow Control** (receiver-side) with **Congestion Control** (network-side).

### Practice Questions
- **Scenario**: A TCP sender has a Congestion Window of 10 and a Threshold of 8. A timeout occurs. What is the new Threshold and Window size?
- **Correct Answer**: Threshold becomes 5 (half of cwnd). Window size becomes 1 (Slow Start restarts).

---

## Chapter 4: The Network Layer
### Quick Summary
Handles **host-to-host** communication. Key functions: **Routing** (path selection) and **Forwarding** (moving packets from input to output).

### Detailed Explanation
- **IPv4**: 32-bit addresses. Hierarchical (Network + Host).
- **Subnetting**: Using a subnet mask to divide IP space.
- **CIDR (Classless Inter-Domain Routing)**: Format a.b.c.d/x.
- **Routing Algorithms**:
  - **Link State (Dijkstra)**: Each router has a complete map of the network. Efficient but requires more memory.
  - **Distance Vector (Bellman-Ford)**: Routers only know distances to neighbors. Slower convergence (Count-to-Infinity problem).
- **DHCP**: Dynamically assigns IP addresses.
- **NAT**: Allows a private network to use a single public IP.

### Real-World Example
Your home router uses **NAT** to allow your phone, laptop, and TV to share one public IP address assigned by your ISP.

### Visual Representation (ASCII Diagram)
\`\`\`text
[IP Datagram]
[Header (20 bytes)] | [Payload (TCP Segment)]
\`\`\`

### Exam Focus
- **Possible Question**: Given the network 192.168.1.0/26, how many usable host addresses are available?
- **Answer**: /26 means 6 bits for hosts (32 - 26 = 6). 2^6 = 64. Usable = 64 - 2 (Network + Broadcast) = 62.

### Common Mistakes
- Forgetting to subtract 2 for usable IP addresses.
- Thinking a router uses MAC addresses for long-distance routing (it uses IPs).

### Practice Questions
- **Scenario**: Explain the 'Count to Infinity' problem in Distance Vector routing.
- **Correct Answer**: When a link goes down, neighbors may keep advertising old routes to each other, incrementing the distance indefinitely. Solved by 'Poison Reverse'.

---

## Chapter 5: Data Link Layer & LANs
### Quick Summary
Communication between **neighboring nodes** on a single link. Uses **MAC addresses**. Key protocols: **Ethernet**, **CSMA/CD**, **ARP**.

### Detailed Explanation
- **Framing**: Encapsulating network layer datagrams into frames.
- **MAC Address**: 48-bit unique hardware address (e.g., FF-FF-FF-FF-FF-FF).
- **ARP (Address Resolution Protocol)**: Translates IP to MAC address.
- **Multiple Access Protocols**:
  - **CSMA/CD**: Used in wired Ethernet. Listen before talk, stop if collision detected.
  - **CSMA/CA**: Used in Wireless (802.11). Collision avoidance because detection is hard in wireless.
- **Switches**: Layer 2 devices. Use MAC tables to forward frames selectively (unlike Hubs which broadcast).

### Real-World Example
An **Ethernet Switch** in an office ensures that your print job only goes to the printer, not to every computer in the building.

### Visual Representation (ASCII Diagram)
\`\`\`text
[Datagram] -> [Header | Datagram | CRC] = Frame
\`\`\`

### Exam Focus
- **Possible Question**: How does a Switch learn its MAC table?
- **Answer**: Via **Self-Learning**. When a frame arrives, the switch records the source MAC address and the port it came from in its table.

### Common Mistakes
- Thinking a Switch uses IP addresses. (It uses MACs; only Layer 3 switches use IPs).
- Confusing a MAC address (burned into hardware) with an IP address (assigned by software).

### Practice Questions
- **Scenario**: A host joins a network and knows the IP of the gateway but not its MAC. Which protocol is used?
- **Correct Answer**: **ARP**. The host sends an ARP Request broadcast, and the gateway replies with its MAC.

---

## Chapter 6: The Physical Layer
### Quick Summary
Transmits **raw bits** over a medium. Focuses on electrical, optical, and radio signals.

### Detailed Explanation
- **Transmission Media**:
  - **Guided**: Twisted pair (Ethernet), Coaxial cable, Fiber optics.
  - **Unguided**: Terrestrial radio, Satellite.
- **Modems**: Modulate digital data into analog signals and vice versa.
- **Signal Impairments**: Attenuation (weakening), Noise, Distortion.
- **Bandwidth**: The frequency range of a signal. Higher bandwidth = higher data rate.

### Real-World Example
**Fiber Optics** use pulses of light to transmit data, making them immune to electromagnetic interference that affects copper wires.

### Exam Focus
- **Possible Question**: Compare Twisted Pair and Fiber Optics in terms of distance and interference.
- **Answer**: Twisted pair is cheaper but limited to ~100m and prone to EMI. Fiber optics can travel kilometers, support much higher rates, and are immune to EMI.

### Common Mistakes
- Thinking "Bandwidth" in the physical layer is the same as "Throughput" in the application layer.

---

## Chapter 7: Network Security
### Quick Summary
Protecting the **CIA Triad**: Confidentiality, Integrity, and Availability.

### Detailed Explanation
- **Confidentiality**: Only sender and receiver can understand the message (Encryption).
- **Integrity**: Ensuring the message wasn't altered (Message Digests/Hashes).
- **Authentication**: Proving you are who you say you are (Certificates).
- **Attacks**:
  - **DoS/DDoS**: Overwhelming a resource.
  - **Man-in-the-Middle**: Intercepting traffic.
  - **Packet Sniffing**: Reading clear-text data (e.g., via Wireshark).
- **SSL/TLS**: Security layer for HTTP (HTTPS). Uses Public Key Cryptography.

### Real-World Example
When you see the padlock icon in your browser, **TLS** is encrypting your connection so a hacker at a coffee shop can't "sniff" your password.

### Exam Focus
- **Possible Question**: Describe a SYN Flood attack.
- **Answer**: An attacker sends many TCP SYN packets but never completes the handshake. This exhausts the server's connection buffer, preventing legitimate users from connecting.

### Common Mistakes
- Thinking Encryption provides Availability. (Encryption provides Confidentiality; firewalls and load balancers help with Availability).

### Practice Questions
- **Scenario**: You receive an email asking for your password. What type of attack is this?
- **Correct Answer**: **Phishing**.

---

# Flashcards

**Q:** What is the primary purpose of the OSI Model?
**A:** A conceptual framework that standardizes network functions into seven distinct layers.

**Q:** Name the seven layers of the OSI model.
**A:** Physical, Data Link, Network, Transport, Session, Presentation, Application.

**Q:** Which OSI layer is responsible for routing packets?
**A:** Network Layer (Layer 3).

**Q:** What is the difference between TCP and UDP?
**A:** TCP is connection-oriented and reliable; UDP is connectionless and best-effort (faster).

**Q:** What does BGP stand for and what is its role?
**A:** Border Gateway Protocol; it routes traffic between autonomous systems on the internet.

**Q:** Define CSMA/CD.
**A:** Carrier Sense Multiple Access with Collision Detection; manages data collisions in Ethernet.

**Q:** What is the size of an IPv4 address?
**A:** 32 bits.

**Q:** What is the size of an IPv6 address?
**A:** 128 bits.

**Q:** What is a Subnet Mask?
**A:** A 32-bit number used to divide an IP address into network and host portions.

**Q:** What is the role of ARP (Address Resolution Protocol)?
**A:** Maps an IP address to a physical MAC address on a local network.

**Q:** What does DNS stand for?
**A:** Domain Name System.

**Q:** What port does HTTP typically use?
**A:** Port 80.

**Q:** What port does HTTPS typically use?
**A:** Port 443.

**Q:** What is the function of the Transport Layer?
**A:** Provides logical communication between application processes running on different hosts.

**Q:** What is a 'Message' in the protocol stack?
**A:** The data unit at the Application Layer.

**Q:** What is a 'Segment'?
**A:** The data unit at the Transport Layer.

**Q:** What is a 'Datagram'?
**A:** The data unit at the Network Layer.

**Q:** What is a 'Frame'?
**A:** The data unit at the Data Link Layer.

**Q:** What does ICMP stand for?
**A:** Internet Control Message Protocol.

**Q:** Which protocol is used by the 'ping' command?
**A:** ICMP.

**Q:** What is the three-way handshake?
**A:** The process (SYN, SYN-ACK, ACK) used to establish a TCP connection.

**Q:** What is 'Flow Control' in TCP?
**A:** Prevents a fast sender from overwhelming a slow receiver.

**Q:** What is 'Congestion Control'?
**A:** Mechanisms used to prevent a sender from overwhelming the network core.

**Q:** What is the difference between a Hub and a Switch?
**A:** A Hub broadcasts data to all ports; a Switch sends data only to the specific destination port.

**Q:** At which layer does a Router operate?
**A:** Network Layer (Layer 3).

**Q:** At which layer does a Link-Layer Switch operate?
**A:** Data Link Layer (Layer 2).

**Q:** What is RTT (Round Trip Time)?
**A:** The time it takes for a packet to travel from sender to receiver and back.

**Q:** Define 'Throughput'.
**A:** The rate (bits/sec) at which bits are actually transferred between sender and receiver.

**Q:** What is a 'Bottleneck Link'?
**A:** The link in a network path with the minimum transmission rate.

**Q:** What is 'Encapsulation'?
**A:** The process of wrapping data in headers as it moves down the protocol stack.

**Q:** What is 'Demultiplexing'?
**A:** Delivering data in a segment to the correct socket based on port numbers.

**Q:** What is a 'Stateless' protocol?
**A:** A protocol (like HTTP) where the server keeps no info about past client requests.

**Q:** What are 'Cookies' used for?
**A:** To maintain user state (like login or shopping carts) in stateless protocols.

**Q:** What is a 'CDN' (Content Distribution Network)?
**A:** A system of distributed servers that deliver content to users based on geographical location.

**Q:** What is 'Packet Sniffing'?
**A:** Passive monitoring of data packets traveling across a network.

**Q:** What is a 'DoS' (Denial of Service) attack?
**A:** An attack aimed at making a network resource unavailable to users by overwhelming it.

**Q:** What is a 'Zombie' in networking?
**A:** A compromised computer controlled remotely by an attacker, often part of a botnet.

**Q:** What is the default port for SMTP?
**A:** Port 25.

**Q:** What does DHCP stand for?
**A:** Dynamic Host Configuration Protocol.

**Q:** What is the purpose of DHCP?
**A:** To dynamically assign IP addresses to hosts as they join a network.

**Q:** What is 'Pipelining'?
**A:** Sending multiple packets without waiting for individual acknowledgments.

**Q:** What is 'Go-Back-N'?
**A:** A pipelined protocol where the sender resends all unacknowledged packets upon a timeout.

**Q:** What is 'Selective Repeat'?
**A:** A pipelined protocol where the sender only resends specific packets that were lost or corrupted.

**Q:** What is the 'TTL' (Time-to-Live) field in an IP header?
**A:** A value that decrements at each hop to prevent packets from circulating indefinitely.

**Q:** What is 'MAC' (Media Access Control) address?
**A:** A 48-bit hardware address unique to each network interface card.

**Q:** What is the function of the Physical Layer?
**A:** To transmit raw bits over a physical medium.

**Q:** Name a 'Guided' transmission medium.
**A:** Fiber-optic cable or twisted-pair copper wire.

**Q:** Name an 'Unguided' transmission medium.
**A:** Terrestrial radio or satellite.

**Q:** What is 'Packet Switching'?
**A:** A method where data is divided into packets and routed independently through the network.

**Q:** What is 'Circuit Switching'?
**A:** A method where a dedicated communication path is established between two nodes before transmission.

**Q:** What is 'FDM' (Frequency-Division Multiplexing)?
**A:** Dividing the frequency spectrum into distinct channels for multiple users.

**Q:** What is 'TDM' (Time-Division Multiplexing)?
**A:** Dividing time into slots where each user has exclusive access to the full bandwidth during their slot.

**Q:** What is the formula for 'Transmission Delay'?
**A:** Packet Length (L) / Transmission Rate (R).

**Q:** What is 'Propagation Delay'?
**A:** The time it takes for a bit to travel from the beginning of the link to the end.

**Q:** What is 'Queuing Delay'?
**A:** The time a packet spends waiting in a router's buffer to be transmitted.

**Q:** What is 'Goodput'?
**A:** The rate of useful application-level data successfully delivered over a link.

**Q:** What does 'Store-and-Forward' mean?
**A:** A switch must receive an entire packet before starting to transmit it to the next link.

**Q:** What is the 'Network Edge'?
**A:** Consists of end systems (hosts) like PCs, smartphones, and servers.

**Q:** What is the 'Network Core'?
**A:** The mesh of interconnected routers and links that forward data between hosts.

**Q:** What is an 'ISP' (Internet Service Provider)?
**A:** A company that provides access to the internet.

**Q:** What is an 'IXP' (Internet Exchange Point)?
**A:** A physical location where different ISPs connect their networks to exchange traffic.

**Q:** What is 'Multiplexing'?
**A:** Gathering data from multiple sockets and adding headers to create segments.

**Q:** What is the role of the 'Presentation Layer'?
**A:** Handles data representation, including encryption and compression.

**Q:** What is the role of the 'Session Layer'?
**A:** Manages dialogue control and synchronization between applications.

**Q:** What is a 'Socket'?
**A:** The software interface through which a process sends/receives messages to/from the network.

**Q:** What is 'UDP' preferred for?
**A:** Real-time applications like VoIP and video streaming where low delay is critical.

**Q:** What does 'TCP' stand for?
**A:** Transmission Control Protocol.

**Q:** What is 'Dijkstra's Algorithm' used for?
**A:** Calculating the shortest path in link-state routing protocols like OSPF.

**Q:** What is 'Bellman-Ford' used for?
**A:** Calculating shortest paths in distance-vector routing protocols like RIP.

**Q:** What is 'NAT' (Network Address Translation)?
**A:** A method of remapping one IP address space into another, often used to save IPv4 addresses.

**Q:** What is 'CIDR' (Classless Inter-Domain Routing)?
**A:** A method for allocating IP addresses and IP routing that replaced the older classful system.

**Q:** What is a 'Default Gateway'?
**A:** The router that a host uses to send traffic to destinations outside its local network.

**Q:** What is 'Half-Duplex'?
**A:** A communication mode where data can flow in both directions, but not simultaneously.

**Q:** What is 'Full-Duplex'?
**A:** A communication mode where data can flow in both directions at the same time.

**Q:** What is the 'MTU' (Maximum Transmission Unit)?
**A:** The largest size packet that a link-layer protocol can transmit.

**Q:** What is 'Fragmentation' in IP?
**A:** The process of splitting an IP datagram into smaller pieces to fit within a link's MTU.

**Q:** What is 'Reassembly'?
**A:** The process of putting fragmented IP packets back together at the destination host.

**Q:** What is 'Checksum' used for?
**A:** To detect bit errors that may have occurred during transmission.

**Q:** What is 'Stop-and-Wait'?
**A:** A simple protocol where the sender waits for an ACK before sending the next packet.

**Q:** What is 'Fast Retransmit' in TCP?
**A:** Retransmitting a lost segment after receiving three duplicate ACKs.

**Q:** What is 'Slow Start' in TCP?
**A:** A phase where the congestion window starts small and doubles every RTT.

**Q:** What is 'TCP Reno'?
**A:** A version of TCP that includes fast recovery after a packet loss.

**Q:** What is 'Jitter'?
**A:** The variation in packet arrival times, critical for real-time applications.

**Q:** What is 'Latency'?
**A:** The total time it takes for data to travel from source to destination.

**Q:** What is 'Broadcasting'?
**A:** Sending a packet to all hosts on a local network.

**Q:** What is 'Multicasting'?
**A:** Sending a packet to a specific group of interested hosts.

**Q:** What is 'Unicasting'?
**A:** Sending a packet to a single specific destination host.

**Q:** What does 'SMTP' stand for?
**A:** Simple Mail Transfer Protocol.

**Q:** What is 'IMAP' used for?
**A:** Accessing email messages stored on a server while keeping them on the server.

**Q:** What is 'POP3' used for?
**A:** Downloading email messages from a server to a local client.

**Q:** What is 'FTP' (File Transfer Protocol)?
**A:** A protocol used for transferring files between a client and a server.

**Q:** What is 'SSH' (Secure Shell)?
**A:** A protocol for secure remote login and other secure network services.

**Q:** What is 'Telnet'?
**A:** An older, insecure protocol for remote terminal access (unencrypted).

**Q:** What is a 'Port Number'?
**A:** A 16-bit number that identifies a specific process on a host.

**Q:** What is the range of 'Well-Known Ports'?
**A:** 0 to 1023.

**Q:** What is the role of a 'DNS Root Server'?
**A:** The first stop in resolving a domain name, providing info on TLD servers.

**Q:** What is a 'TLD' (Top-Level Domain)?
**A:** Domains like .com, .org, .edu, and country codes like .uk or .ca.

**Q:** What is 'Iterative Query' in DNS?
**A:** A query where the client contacts multiple servers until the name is resolved.

**Q:** What is 'Recursive Query' in DNS?
**A:** A query where one server takes on the responsibility of resolving the name for the client.

**Q:** What is 'DNS Caching'?
**A:** Storing resolved domain names locally to speed up future requests.

**Q:** What is 'P2P' file sharing?
**A:** A decentralized model where users share files directly with each other (e.g., BitTorrent).

**Q:** What is a 'BitTorrent Tracker'?
**A:** A server that keeps track of peers participating in a specific torrent swarm.

**Q:** What is a 'Distributed Hash Table' (DHT)?
**A:** A decentralized system for looking up content in a P2P network without a tracker.

**Q:** What is 'Self-Scalability' in P2P?
**A:** The property where more peers increase both demand and total system capacity.

**Q:** What is 'TCP Persistence'?
**A:** Keeping a TCP connection open for multiple requests to the same server.

**Q:** What is 'Head-of-Line' (HOL) Blocking?
**A:** When a packet at the front of a queue blocks subsequent packets from being processed.

**Q:** What is 'CRC' (Cyclic Redundancy Check)?
**A:** A more powerful error-detection code used at the Link Layer.

**Q:** What is 'Parity Bit'?
**A:** A simple error-detection method adding one extra bit to make the count of 1s even or odd.

**Q:** What is 'Error Correction'?
**A:** Not just detecting errors, but also reconstructing the original data without retransmission.

**Q:** What is 'FEC' (Forward Error Correction)?
**A:** Sending redundant data to allow the receiver to correct errors.

**Q:** What is 'ALOHA'?
**A:** An early random-access protocol for wireless communication.

**Q:** What is 'Slotted ALOHA'?
**A:** An improved version of ALOHA where time is divided into slots to reduce collisions.

**Q:** What is 'CSMA' (Carrier Sense Multiple Access)?
**A:** A protocol where nodes listen to the medium before transmitting.

**Q:** What is 'Collision'?
**A:** When two or more nodes transmit at the same time, causing signal interference.

**Q:** What is 'Exponential Backoff'?
**A:** An algorithm where nodes wait a random time that doubles after each collision.

**Q:** What is 'VLAN' (Virtual Local Area Network)?
**A:** A logical group of hosts that appear to be on the same LAN despite physical locations.

**Q:** What is 'Spanning Tree Protocol' (STP)?
**A:** Prevents loops in a network with redundant paths between switches.

**Q:** What is 'Layer 3 Switch'?
**A:** A high-speed switch that also performs routing functions.

**Q:** What is 'Autonomous System' (AS)?
**A:** A group of IP networks under the control of a single entity (like an ISP).

**Q:** What is 'IGP' (Interior Gateway Protocol)?
**A:** Routing protocols used within an AS, like OSPF or RIP.

**Q:** What is 'EGP' (Exterior Gateway Protocol)?
**A:** Routing protocols used between different ASes, like BGP.

**Q:** What is 'Anycast'?
**A:** Routing traffic to the 'closest' of several possible destinations.

**Q:** What is 'IPv6 Transition'?
**A:** Methods like Dual-Stack or Tunneling to allow IPv4 and IPv6 to coexist.

**Q:** What is 'IPSec'?
**A:** A suite of protocols for securing IP communications by authenticating and encrypting packets.

**Q:** What is a 'Firewall'?
**A:** A security system that monitors and controls incoming/outgoing network traffic based on rules.

**Q:** What is 'WPA3'?
**A:** The latest security standard for protecting Wi-Fi networks.

**Q:** What is 'VPN' (Virtual Private Network)?
**A:** Creates a secure, encrypted tunnel over a public network.

**Q:** What is 'TLS' (Transport Layer Security)?
**A:** The successor to SSL, used to secure communication over HTTPS.

**Q:** What is 'Botnet'?
**A:** A network of infected computers (zombies) used for large-scale attacks.

**Q:** What is 'Phishing'?
**A:** A social engineering attack aimed at stealing sensitive info like passwords.

**Q:** What is 'Man-in-the-Middle' (MITM) attack?
**A:** When an attacker secretly relays and possibly alters communication between two parties.

**Q:** What is 'DNS Spoofing'?
**A:** An attack that redirects users to a malicious website by providing a false IP in DNS.

**Q:** What is 'MAC Spoofing'?
**A:** Changing the hardware address of a network interface to bypass security filters.

**Q:** What is 'SYN Flood'?
**A:** A DoS attack that sends a barrage of SYN packets to exhaust a server's resources.

**Q:** What is 'Throughput' vs 'Bandwidth'?
**A:** Bandwidth is theoretical max; throughput is the actual achieved rate.

**Q:** What is 'Packet Loss'?
**A:** When packets are discarded due to network congestion or errors.

**Q:** What is 'Network Topology'?
**A:** The physical or logical arrangement of nodes and links (e.g., Star, Mesh, Ring).

**Q:** What is 'Fiber Optics'?
**A:** A medium that uses light pulses to transmit data at very high speeds.

**Q:** What is 'Twisted Pair'?
**A:** Copper wires twisted together to reduce electromagnetic interference.

**Q:** What is 'Coaxial Cable'?
**A:** A copper cable with a shield, commonly used for cable TV and broadband.

**Q:** What is 'Terrestrial Radio'?
**A:** Wireless transmission through the atmosphere using radio waves.

**Q:** What is 'Satellite Radio'?
**A:** Communication using geostationary or low-earth orbit satellites.

**Q:** What is 'Modem' (Modulator-Demodulator)?
**A:** Converts digital data to analog signals for transmission over phone/cable lines.

**Q:** What is 'Ethernet'?
**A:** The most widely used link-layer technology for local area networks.

**Q:** What is '802.11'?
**A:** The IEEE standard for wireless LANs (Wi-Fi).

**Q:** What is 'Bluetooth'?
**A:** A short-range wireless technology for personal area networks (802.15.1).

**Q:** What is 'IP Address' vs 'Domain Name'?
**A:** IP is for machines (numeric); Domain Name is for humans (text).

**Q:** What is 'Subnetting'?
**A:** The practice of dividing a network into smaller, more manageable sub-networks.

**Q:** What is 'IPv4 Exhaustion'?
**A:** The depletion of available unassigned IPv4 addresses.

**Q:** What is 'IPv6's solution to exhaustion?
**A:** A massive 128-bit address space ($2^{128}$ addresses).

**Q:** What is 'Network Mask' vs 'Wildcard Mask'?
**A:** Network mask identifies the network; wildcard mask is used in ACLs to match IP ranges.

---


# Quiz

1. Which layer of the OSI model is responsible for routing packets across different networks?
A. Data Link
B. Network
C. Transport
D. Session
**Answer:** B

2. What is the size of an IPv6 address?
A. 32 bits
B. 64 bits
C. 128 bits
D. 256 bits
**Answer:** C

3. Which protocol is used to map an IP address to a MAC address?
A. DHCP
B. DNS
C. ARP
D. ICMP
**Answer:** C

4. Which TCP flag is used to initiate a connection?
A. ACK
B. SYN
C. FIN
D. RST
**Answer:** B

---

# Quiz (Short-Answer)

1. Explain the process of a 3-way handshake in TCP.
**Guide:** 1. Client sends a SYN packet to the server. 2. Server responds with a SYN-ACK packet. 3. Client sends an ACK packet back to the server. The connection is then established.

2. What is the difference between a Hub, Switch, and Router?
**Guide:** A Hub broadcasts data to all ports. A Switch sends data only to the specific port of the recipient (using MAC addresses). A Router connects different networks and routes traffic using IP addresses.

---

# Revision

## Core Layer Breakdown
- **Application Layer** = Data/Messages. Key: HTTP, DNS, SMTP. End-to-end.
- **Transport Layer** = Segments. Key: TCP (Reliable, Handshake) vs UDP (Fast, Lossy).
- **Network Layer** = Datagrams. Key: IP (Routing/Forwarding), ICMP, DHCP.
- **Link Layer** = Frames. Key: Ethernet, MAC, ARP, Switches.
- **Physical Layer** = Bits. Key: Media, Modems, Bandwidth.

## Protocol Cheat Sheet
- **DNS** = Port 53. Translates Name -> IP.
- **HTTP** = Port 80. Stateless. Uses TCP.
- **HTTPS** = Port 443. SSL/TLS.
- **SMTP** = Port 25. Push protocol for mail.
- **DHCP** = Dynamic IP assignment.
- **ARP** = IP -> MAC resolution.
- **BGP** = Inter-domain routing.
- **OSPF** = Intra-domain (Link-state).

## Quick Formulas
- **Transmission Delay** = L / R (Length / Rate).
- **Propagation Delay** = d / s (Distance / Speed).
- **Usable IPs (/x)** = 2^(32-x) - 2.

---

# Comparison

| Protocol | Layer | Reliability | Key Feature |
| --- | --- | --- | --- |
| TCP | Transport | Reliable | 3-Way Handshake |
| UDP | Transport | Unreliable | Low Latency |
| IP | Network | Best-Effort | Universal Addressing |
| Ethernet | Link | Best-Effort | CSMA/CD |

---
`;
