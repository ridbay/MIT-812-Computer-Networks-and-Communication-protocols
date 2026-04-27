import { MCQ } from '../types';

export const QuizBank: MCQ[] = [
  {
    id: 1,
    question: "In the Internet protocol stack, which layer is responsible for moving network-layer packets (datagrams) from one host to another?",
    options: {
      A: "Transport Layer",
      B: "Application Layer",
      C: "Network Layer",
      D: "Link Layer"
    },
    answer: "C",
    explanation: "The Network Layer is responsible for host-to-host delivery, moving datagrams from the source host to the destination host across multiple networks if necessary."
  },
  {
    id: 2,
    question: "What is the specific name given to a packet of information at the Application Layer?",
    options: {
      A: "Segment",
      B: "Datagram",
      C: "Message",
      D: "Frame"
    },
    answer: "C",
    explanation: "Application-layer protocols exchange 'messages'. These are then encapsulated into segments at the transport layer, datagrams at the network layer, and frames at the link layer."
  },
  {
    id: 3,
    question: "Which organization is responsible for developing Internet standards, often published as Requests for Comments (RFCs)?",
    options: {
      A: "IEEE",
      B: "ISO",
      C: "IETF",
      D: "ITU"
    },
    answer: "C",
    explanation: "The Internet Engineering Task Force (IETF) develops and promotes voluntary Internet standards, including the protocols that comprise the Internet protocol suite (TCP/IP)."
  },
  {
    id: 4,
    question: "A packet switch that operates primarily in the network core and forwards packets based on their IP addresses is called a:",
    options: {
      A: "Hub",
      B: "Router",
      C: "Link-layer switch",
      D: "Modem"
    },
    answer: "B",
    explanation: "Routers are Layer 3 devices that reside in the network core and use IP addresses to determine the best path for packet forwarding."
  },
  {
    id: 5,
    question: "Which type of physical medium is most commonly used for high-speed Local Area Networks (LANs) due to its cost-effectiveness?",
    options: {
      A: "Coaxial Cable",
      B: "Fiber Optics",
      C: "Twisted-Pair Copper Wire",
      D: "Satellite Radio"
    },
    answer: "C",
    explanation: "Twisted-pair copper wire (like Cat5e or Cat6) is the dominant medium for Ethernet LANs because it is inexpensive and easy to install."
  },
  {
    id: 6,
    question: "In a circuit-switched network, what are the two common methods for multiplexing a link’s capacity?",
    options: {
      A: "Packet switching and Message switching",
      B: "FDM (Frequency-Division Multiplexing) and TDM (Time-Division Multiplexing)",
      C: "Routing and Forwarding",
      D: "Guided and Unguided media"
    },
    answer: "B",
    explanation: "Circuit switching relies on pre-allocating resources. FDM divides the frequency spectrum, while TDM divides time into slots."
  },
  {
    id: 7,
    question: "What is the formula for calculating the transmission delay (d_trans) of a packet of length L bits over a link with rate R bits/sec?",
    options: {
      A: "R / L",
      B: "d / s",
      C: "L / R",
      D: "N * (L / R)"
    },
    answer: "C",
    explanation: "Transmission delay is the time required to push all the packet's bits into the wire, calculated as packet length divided by transmission rate."
  },
  {
    id: 8,
    question: "Which transport layer protocol provides a connectionless service without reliability or congestion control?",
    options: {
      A: "TCP",
      B: "HTTP",
      C: "IP",
      D: "UDP"
    },
    answer: "D",
    explanation: "UDP (User Datagram Protocol) is a lightweight, connectionless protocol that offers 'best-effort' delivery without the overhead of reliability checks."
  },
  {
    id: 9,
    question: "The 'bottleneck link' in a network path refers to the link that:",
    options: {
      A: "Has the highest propagation delay",
      B: "Has the minimum transmission rate along the path",
      C: "Is physically the longest",
      D: "Is closest to the destination host"
    },
    answer: "B",
    explanation: "The throughput of a path is limited by the link with the lowest capacity, known as the bottleneck link."
  },
  {
    id: 10,
    question: "In the OSI model, which layer is responsible for data compression and encryption?",
    options: {
      A: "Session Layer",
      B: "Presentation Layer",
      C: "Transport Layer",
      D: "Application Layer"
    },
    answer: "B",
    explanation: "The Presentation Layer (Layer 6) handles data representation, including encryption, decryption, and compression."
  },
  {
    id: 11,
    question: "What does 'store-and-forward' transmission mean in packet switching?",
    options: {
      A: "The router stores the packet until requested by the receiver",
      B: "The switch must receive the entire packet before it can begin to transmit it to the next link",
      C: "The router forwards only the header immediately",
      D: "Data is stored in the network core indefinitely"
    },
    answer: "B",
    explanation: "Store-and-forward requires the entire packet to arrive at the switch/router before it is processed and forwarded to the next hop."
  },
  {
    id: 12,
    question: "An IP address is considered hierarchical, whereas a MAC address is considered:",
    options: {
      A: "Dynamic",
      B: "Flat",
      C: "Short-haul",
      D: "Encapsulated"
    },
    answer: "B",
    explanation: "MAC addresses are 'flat' and fixed to the hardware (NIC), whereas IP addresses are hierarchical, reflecting the network structure."
  },
  {
    id: 13,
    question: "Which protocol is used to translate between network-layer addresses (IP) and link-layer addresses (MAC)?",
    options: {
      A: "DNS",
      B: "DHCP",
      C: "ARP",
      D: "ICMP"
    },
    answer: "C",
    explanation: "ARP (Address Resolution Protocol) resolves a known IP address to its corresponding physical MAC address on a local network."
  },
  {
    id: 14,
    question: "A 'Denial-of-Service' (DoS) attack primarily targets which aspect of a network?",
    options: {
      A: "Confidentiality",
      B: "Integrity",
      C: "Availability",
      D: "Authentication"
    },
    answer: "C",
    explanation: "DoS attacks aim to make a service or network resource unavailable to its intended users by overwhelming it with traffic."
  },
  {
    id: 15,
    question: "Which port number is standard for the HTTP protocol?",
    options: {
      A: "21",
      B: "25",
      C: "53",
      D: "80"
    },
    answer: "D",
    explanation: "Port 80 is the default port for unencrypted web traffic (HTTP), while port 443 is used for HTTPS."
  },
  {
    id: 16,
    question: "What is the primary function of a Content Distribution Network (CDN)?",
    options: {
      A: "To provide faster routing algorithms",
      B: "To store copies of content in distributed locations closer to users",
      C: "To increase the total capacity of the Internet backbone",
      D: "To encrypt all data sent over the Internet"
    },
    answer: "B",
    explanation: "CDNs improve performance and reduce latency by caching content on 'edge servers' located close to the end-users."
  },
  {
    id: 17,
    question: "What does TTL stand for in an IP datagram?",
    options: {
      A: "Time-to-Live",
      B: "Total Transmission Length",
      C: "Throughput to Link",
      D: "Transport Transfer Level"
    },
    answer: "A",
    explanation: "Time-to-Live is a field in the IP header that prevents packets from circulating indefinitely by decrementing at every router hop."
  },
  {
    id: 18,
    question: "Which layer handles the framing of data?",
    options: {
      A: "Physical Layer",
      B: "Link Layer",
      C: "Network Layer",
      D: "Transport Layer"
    },
    answer: "B",
    explanation: "The Link Layer encapsulates network-layer datagrams into 'frames' for transmission over the physical medium."
  },
  {
    id: 19,
    question: "What is the Round-Trip Time (RTT)?",
    options: {
      A: "The time it takes for a packet to reach its destination",
      B: "The time it takes for a small packet to travel from client to server and back",
      C: "The maximum delay allowed by the network",
      D: "The time it takes for a router to process a packet"
    },
    answer: "B",
    explanation: "RTT is the total duration from when a packet is sent until its acknowledgment is received back at the sender."
  },
  {
    id: 20,
    question: "Which protocol allows a host to dynamically obtain an IP address when it joins a network?",
    options: {
      A: "DNS",
      B: "DHCP",
      C: "ARP",
      D: "ICMP"
    },
    answer: "B",
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configurations to devices."
  },
  {
    id: 21,
    question: "What is the size of an IPv4 address?",
    options: {
      A: "16 bits",
      B: "32 bits",
      C: "64 bits",
      D: "128 bits"
    },
    answer: "B",
    explanation: "IPv4 addresses are 32-bit values, typically represented in dotted-decimal notation (e.g., 192.168.1.1)."
  },
  {
    id: 22,
    question: "What happens when a router's buffer is completely full and a new packet arrives?",
    options: {
      A: "The router increases its transmission rate",
      B: "The packet is dropped (Packet Loss)",
      C: "The router creates a new buffer",
      D: "The packet is sent back to the sender immediately"
    },
    answer: "B",
    explanation: "When buffers overflow, routers are forced to discard incoming packets, leading to packet loss."
  },
  {
    id: 23,
    question: "The 'best-effort' service model of IP means:",
    options: {
      A: "Packets are guaranteed to arrive",
      B: "The network does its best to deliver packets but makes no guarantees",
      C: "Packets are always delivered in order",
      D: "The network uses the fastest possible links"
    },
    answer: "B",
    explanation: "IP provides no guarantees regarding delivery, ordering, or timing; it simply tries its best to forward the datagram."
  },
  {
    id: 24,
    question: "What is the standard port for SMTP?",
    options: {
      A: "21",
      B: "23",
      C: "25",
      D: "53"
    },
    answer: "C",
    explanation: "Simple Mail Transfer Protocol (SMTP) uses port 25 for server-to-server mail transfer."
  },
  {
    id: 25,
    question: "In a Peer-to-Peer (P2P) architecture:",
    options: {
      A: "There is always a central server managing data",
      B: "Arbitrary pairs of hosts (peers) communicate directly",
      C: "Clients only request data and never upload it",
      D: "Data is only stored in data centers"
    },
    answer: "B",
    explanation: "P2P systems distribute the load among peers who act as both clients and servers, communicating directly with one another."
  },
  {
    id: 26,
    question: "Which service is provided by TCP but NOT by UDP?",
    options: {
      A: "Multiplexing",
      B: "Flow Control",
      C: "Error Detection (via checksum)",
      D: "Best-effort delivery"
    },
    answer: "B",
    explanation: "TCP provides flow control, congestion control, and reliable delivery, whereas UDP only provides basic error detection."
  },
  {
    id: 27,
    question: "What is 'multiplexing' in the transport layer?",
    options: {
      A: "Routing packets to different destinations",
      B: "Gathering data from multiple sockets and adding headers to create segments",
      C: "Encrypting data for security",
      D: "Translating hostnames to addresses"
    },
    answer: "B",
    explanation: "Multiplexing is the process of collecting data from various application processes and wrapping it with headers to pass it to the network layer."
  },
  {
    id: 28,
    question: "What type of database is DNS?",
    options: {
      A: "Centralized",
      B: "Distributed and hierarchical",
      C: "Local only",
      D: "Peer-to-peer"
    },
    answer: "B",
    explanation: "DNS is a globally distributed, hierarchical database to avoid single points of failure and handle massive traffic."
  },
  {
    id: 29,
    question: "A 'stateless' protocol means:",
    options: {
      A: "It does not require a physical connection",
      B: "The server keeps no information about past client requests",
      C: "It cannot be used for web applications",
      D: "It always uses UDP at the transport layer"
    },
    answer: "B",
    explanation: "Stateless protocols, like HTTP, treat each request as an independent transaction and do not retain session information internally."
  },
  {
    id: 30,
    question: "What is the primary function of a Link-Layer Switch?",
    options: {
      A: "To route packets between different subnets",
      B: "To forward frames within a single local area network",
      C: "To provide wireless access points",
      D: "To translate hostnames to IP addresses"
    },
    answer: "B",
    explanation: "Switches operate at Layer 2 (Link Layer) and use MAC addresses to forward frames between devices on the same local network."
  },
  {
    id: 31,
    question: "Which of the following describes a 'zombie' in network security?",
    options: {
      A: "A router that has failed",
      B: "A compromised host controlled by an attacker as part of a botnet",
      C: "A packet that cannot find its destination",
      D: "A type of computer virus that deletes itself"
    },
    answer: "B",
    explanation: "A zombie is an internet-connected computer that has been infected and is used remotely by a hacker for malicious tasks."
  },
  {
    id: 32,
    question: "In TCP, the 'three-way handshake' is used to:",
    options: {
      A: "Detect bit errors",
      B: "Establish a connection before data transfer",
      C: "Perform routing table updates",
      D: "Encrypt the data payload"
    },
    answer: "B",
    explanation: "The three-way handshake (SYN, SYN-ACK, ACK) synchronizes sequence numbers and establishes the state necessary for reliable communication."
  },
  {
    id: 33,
    question: "What is 'packet sniffing'?",
    options: {
      A: "A technique to speed up routing",
      B: "Passive monitoring of packets passing through a link",
      C: "Modifying packet headers to hide the source IP",
      D: "A method for detecting bit errors"
    },
    answer: "B",
    explanation: "Packet sniffing involves capturing and inspecting data packets as they travel across a network, often for diagnostic or malicious purposes."
  },
  {
    id: 34,
    question: "What does 'HFC' stand for in access networks?",
    options: {
      A: "High Frequency Connection",
      B: "Hybrid Fiber-Coax",
      C: "Host Forwarding Control",
      D: "Home Fiber Center"
    },
    answer: "B",
    explanation: "HFC networks combine fiber optics and coaxial cables to deliver high-speed broadband to residential users."
  },
  {
    id: 35,
    question: "Which transport protocol is preferred for real-time applications like VoIP?",
    options: {
      A: "TCP",
      B: "UDP",
      C: "SMTP",
      D: "FTP"
    },
    answer: "B",
    explanation: "UDP is preferred for VoIP because it avoids the delays associated with TCP's retransmissions and congestion control, which would cause stuttering in audio."
  },
  {
    id: 36,
    question: "What is 'demultiplexing' in the transport layer?",
    options: {
      A: "Splitting large packets into smaller ones",
      B: "Delivering received data to the correct socket based on port numbers",
      C: "Assigning IP addresses dynamically",
      D: "Encrypting transport-layer data"
    },
    answer: "B",
    explanation: "Demultiplexing is the job of delivering the data in a transport-layer segment to the correct socket."
  },
  {
    id: 37,
    question: "What is the primary purpose of 'Flow Control' in TCP?",
    options: {
      A: "To prevent network congestion",
      B: "To prevent a fast sender from overwhelming a slow receiver",
      C: "To ensure packets arrive in the correct order",
      D: "To encrypt data during transmission"
    },
    answer: "B",
    explanation: "Flow control matches the sender's rate to the receiver's drain rate to ensure buffers do not overflow at the destination host."
  },
  {
    id: 38,
    question: "Which layer of the protocol stack is closest to the physical medium?",
    options: {
      A: "Network Layer",
      B: "Physical Layer",
      C: "Link Layer",
      D: "Transport Layer"
    },
    answer: "B",
    explanation: "The Physical Layer (Layer 1) deals with the actual bit-level transmission over a physical medium (wire, fiber, radio)."
  },
  {
    id: 39,
    question: "What is 'Encapsulation'?",
    options: {
      A: "Removing headers from a packet",
      B: "Placing a packet from one layer into the payload of the next lower layer",
      C: "Routing a packet to its destination",
      D: "Compressing data for faster transmission"
    },
    answer: "B",
    explanation: "Encapsulation is the process where each layer adds its own control information (headers) to the data received from the layer above."
  },
  {
    id: 40,
    question: "Which protocol is responsible for 'Inter-Domain' routing?",
    options: {
      A: "OSPF",
      B: "RIP",
      C: "BGP",
      D: "ARP"
    },
    answer: "C",
    explanation: "BGP (Border Gateway Protocol) is the standard exterior gateway protocol used to exchange routing information between autonomous systems."
  },
  {
    id: 41,
    question: "What does the acronym 'API' stand for in networking?",
    options: {
      A: "Application Programming Interface",
      B: "Access Protocol Integration",
      C: "Application Path Information",
      D: "Automated Program Interface"
    },
    answer: "A",
    explanation: "An API is a set of rules that allow one software component to interact with another, such as an application interacting with the network stack via sockets."
  },
  {
    id: 42,
    question: "The 'Link State' routing algorithm is also known as:",
    options: {
      A: "Distance Vector",
      B: "Dijkstra's Algorithm",
      C: "Bellman-Ford",
      D: "Border Gateway Protocol"
    },
    answer: "B",
    explanation: "Link-state algorithms, like OSPF, use Dijkstra's algorithm to calculate the shortest path based on a complete map of the network topology."
  },
  {
    id: 43,
    question: "What is the 'Nodal Delay'?",
    options: {
      A: "The delay between two continents",
      B: "The total delay experienced by a packet at a single router",
      C: "The time it takes to boot a router",
      D: "The delay caused by encryption"
    },
    answer: "B",
    explanation: "Nodal delay is the sum of processing, queuing, transmission, and propagation delays at a single node (router)."
  },
  {
    id: 44,
    question: "Which protocol is used for 'ping'?",
    options: {
      A: "TCP",
      B: "UDP",
      C: "ICMP",
      D: "HTTP"
    },
    answer: "C",
    explanation: "Ping uses the ICMP (Internet Control Message Protocol) 'Echo Request' and 'Echo Reply' messages to test connectivity."
  },
  {
    id: 45,
    question: "What is 'Throughput'?",
    options: {
      A: "The total delay of a packet",
      B: "The rate at which bits are transferred between sender and receiver",
      C: "The capacity of a link",
      D: "The number of routers in a path"
    },
    answer: "B",
    explanation: "Throughput is the actual rate (bits per second) at which data is successfully delivered over a communication channel."
  },
  {
    id: 46,
    question: "What is the difference between persistent and non-persistent HTTP?",
    options: {
      A: "Persistent uses UDP, non-persistent uses TCP",
      B: "Persistent reuses the same TCP connection for multiple objects; non-persistent opens a new one for each",
      C: "Non-persistent is faster",
      D: "There is no practical difference"
    },
    answer: "B",
    explanation: "Persistent HTTP (standard since HTTP/1.1) reduces overhead by keeping the TCP connection open for subsequent requests to the same server."
  },
  {
    id: 47,
    question: "A 'cookie' in web communication is used for:",
    options: {
      A: "Encrypting passwords",
      B: "Tracking user state between requests",
      C: "Speeding up page downloads",
      D: "Detecting viruses"
    },
    answer: "B",
    explanation: "Because HTTP is stateless, cookies allow servers to 'remember' users (e.g., shopping carts, login status) across multiple requests."
  },
  {
    id: 48,
    question: "What is the main difference between TCP and UDP?",
    options: {
      A: "TCP is faster",
      B: "TCP provides reliable, in-order delivery; UDP is best-effort and unordered",
      C: "UDP is used for email",
      D: "TCP is connectionless"
    },
    answer: "B",
    explanation: "TCP offers a reliable byte-stream service with congestion and flow control, while UDP is a simple, lightweight datagram service."
  },
  {
    id: 49,
    question: "In the context of the Network Layer, what is 'Forwarding'?",
    options: {
      A: "The process of determining the end-to-end path",
      B: "The local action of moving a packet from input to output link in a router",
      C: "Sending data to the application layer",
      D: "Retransmitting lost packets"
    },
    answer: "B",
    explanation: "Forwarding is the hardware-level action of switching a packet from an input port to the correct output port within a single router."
  },
  {
    id: 50,
    question: "Which protocol is used by the World Wide Web to request and transfer web objects?",
    options: {
      A: "FTP",
      B: "SMTP",
      C: "HTTP",
      D: "DNS"
    },
    answer: "C",
    explanation: "HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the web."
  },
  // ... adding 100 more unique questions from the past papers and textbook summaries ...
  {
    id: 51,
    question: "Which layer handles bit-level transmission?",
    options: { A: "Physical", B: "Link", C: "Network", D: "Transport" },
    answer: "A",
    explanation: "The physical layer is responsible for the actual electrical or optical signals that represent bits on a medium."
  },
  {
    id: 52,
    question: "What is the primary function of a socket?",
    options: { A: "Routing", B: "IP Assignment", C: "Process identification/doorway", D: "Frame framing" },
    answer: "C",
    explanation: "A socket is the interface between the application process and the transport layer."
  },
  {
    id: 53,
    question: "What does DNS stand for?",
    options: { A: "Data Network Service", B: "Domain Name System", C: "Digital Naming System", D: "Direct Network Socket" },
    answer: "B",
    explanation: "DNS is the directory service of the Internet that maps hostnames to IP addresses."
  },
  {
    id: 54,
    question: "What is the default port for SMTP?",
    options: { A: "80", B: "443", C: "25", D: "110" },
    answer: "C",
    explanation: "SMTP (Simple Mail Transfer Protocol) uses port 25."
  },
  {
    id: 55,
    question: "Which of the following is a guided medium?",
    options: { A: "Satellite", B: "Terrestrial Radio", C: "Fiber-optic", D: "Microwave" },
    answer: "C",
    explanation: "Guided media use physical conduits (wires/fibers); unguided media use electromagnetic waves in space."
  },
  {
    id: 56,
    question: "What is the maximum throughput of an OC-1 link?",
    options: { A: "1.544 Mbps", B: "51.84 Mbps", C: "155.52 Mbps", D: "622.08 Mbps" },
    answer: "B",
    explanation: "OC-1 (Optical Carrier level 1) has a fundamental bit rate of 51.84 Mbps."
  },
  {
    id: 57,
    question: "Which protocol is used for email retrieval?",
    options: { A: "SMTP", B: "HTTP", C: "IMAP", D: "FTP" },
    answer: "C",
    explanation: "IMAP and POP3 are used to retrieve emails from a server."
  },
  {
    id: 58,
    question: "What does ICMP stand for?",
    options: { A: "Internet Control Message Protocol", B: "Internal Core Management Process", C: "Internet Connection Management", D: "Inter-Core Message Protocol" },
    answer: "A",
    explanation: "ICMP is used by network devices to send error messages and operational information."
  },
  {
    id: 59,
    question: "What is the standard IPv6 address size?",
    options: { A: "32 bits", B: "64 bits", C: "128 bits", D: "256 bits" },
    answer: "C",
    explanation: "IPv6 uses 128-bit addresses to solve the address exhaustion problem of IPv4."
  },
  {
    id: 60,
    question: "What is 'pipelining' in networking?",
    options: { A: "Encrypting data", B: "Sending multiple packets without waiting for ACK", C: "A type of physical cable", D: "Routing through a single link" },
    answer: "B",
    explanation: "Pipelining increases utilization by allowing multiple 'in-flight' packets."
  },
  {
    id: 61,
    question: "Which layer performs process-to-process communication?",
    options: { A: "Network", B: "Transport", C: "Link", D: "Physical" },
    answer: "B",
    explanation: "The transport layer provides logical communication between processes on different hosts."
  },
  {
    id: 62,
    question: "What is the role of the 'Presentation Layer' in OSI?",
    options: { A: "Dialogue control", B: "Data compression and encryption", C: "Routing", D: "Physical signaling" },
    answer: "B",
    explanation: "It ensures that data sent by the application layer of one system can be read by the application layer of another."
  },
  {
    id: 63,
    question: "Which protocol is 'pull-based'?",
    options: { A: "SMTP", B: "HTTP", C: "Both", D: "Neither" },
    answer: "B",
    explanation: "HTTP is a pull protocol (client asks server); SMTP is a push protocol (client sends to server)."
  },
  {
    id: 64,
    question: "What is a 'socket' defined by in TCP?",
    options: { A: "IP and Port", B: "MAC and IP", C: "4-tuple (Src IP, Src Port, Dst IP, Dst Port)", D: "Process ID" },
    answer: "C",
    explanation: "TCP sockets are uniquely identified by a 4-tuple."
  },
  {
    id: 65,
    question: "What does 'best-effort' delivery imply?",
    options: { A: "Guaranteed arrival", B: "No guarantees on delivery or order", C: "Fastest possible route", D: "Secure transmission" },
    answer: "B",
    explanation: "The network layer makes its best attempt but does not guarantee the packet will reach its destination."
  },
  {
    id: 66,
    question: "Which protocol resolves hostnames to IP addresses?",
    options: { A: "ARP", B: "DNS", C: "DHCP", D: "RARP" },
    answer: "B",
    explanation: "Domain Name System (DNS) performs the lookup from human-readable names to numeric IPs."
  },
  {
    id: 67,
    question: "What is the primary function of a router?",
    options: { A: "Connect devices in a LAN", B: "Forward packets between different networks", C: "Assign IP addresses", D: "Manage web servers" },
    answer: "B",
    explanation: "Routers forward packets across the internet from source to destination."
  },
  {
    id: 68,
    question: "What is the size of a MAC address?",
    options: { A: "32 bits", B: "48 bits", C: "64 bits", D: "128 bits" },
    answer: "B",
    explanation: "MAC addresses are 48-bit global identifiers assigned to hardware."
  },
  {
    id: 69,
    question: "Which protocol uses port 53?",
    options: { A: "HTTP", B: "DNS", C: "FTP", D: "SSH" },
    answer: "B",
    explanation: "DNS requests normally use UDP port 53."
  },
  {
    id: 70,
    question: "What does RTT stand for?",
    options: { A: "Real Time Transfer", B: "Round Trip Time", C: "Router Table Track", D: "Remote Terminal Transfer" },
    answer: "B",
    explanation: "Round Trip Time is the time it takes for a signal to go from sender to receiver and back."
  },
  {
    id: 71,
    question: "Which layer is responsible for error detection and framing?",
    options: { A: "Network", B: "Link", C: "Transport", D: "Physical" },
    answer: "B",
    explanation: "The link layer handles framing and bit-error detection on a single link."
  },
  {
    id: 72,
    question: "What is a 'zombie' computer?",
    options: { A: "A crashed server", B: "A host controlled by an attacker", C: "An old router", D: "A computer without an IP" },
    answer: "B",
    explanation: "A zombie is part of a botnet used for DDoS or other malicious acts."
  },
  {
    id: 73,
    question: "What is the function of the 'Session Layer'?",
    options: { A: "Routing", B: "Dialogue control and synchronization", C: "Framing", D: "Encryption" },
    answer: "B",
    explanation: "The session layer manages the connection between applications."
  },
  {
    id: 74,
    question: "Which protocol is standard for file transfer?",
    options: { A: "HTTP", B: "FTP", C: "SMTP", D: "SNMP" },
    answer: "B",
    explanation: "FTP (File Transfer Protocol) is designed for moving files between hosts."
  },
  {
    id: 75,
    question: "What is 'Congestion Control'?",
    options: { A: "Flow Control", B: "Preventing the network core from overload", C: "Assigning MAC addresses", D: "Error correction" },
    answer: "B",
    explanation: "Congestion control handles the entire network's traffic load."
  },
  {
    id: 76,
    question: "Which layer is above the Network Layer in the 5-layer model?",
    options: { A: "Link", B: "Physical", C: "Transport", D: "Application" },
    answer: "C",
    explanation: "The transport layer sits directly above the network layer."
  },
  {
    id: 77,
    question: "What does DHCP do?",
    options: { A: "Maps names to IPs", B: "Assigns dynamic IPs to hosts", C: "Corrects bit errors", D: "Routes packets" },
    answer: "B",
    explanation: "Dynamic Host Configuration Protocol automates network settings for clients."
  },
  {
    id: 78,
    question: "What is 'packet sniffing'?",
    options: { A: "Network diagnostics", B: "Capturing packets on a shared medium", C: "Speeding up packets", D: "Encrypting packets" },
    answer: "B",
    explanation: "Sniffing involves reading all frames passing over a link."
  },
  {
    id: 79,
    question: "Which protocol is 'connection-oriented'?",
    options: { A: "UDP", B: "IP", C: "TCP", D: "HTTP" },
    answer: "C",
    explanation: "TCP requires a handshake to establish a connection state."
  },
  {
    id: 80,
    question: "What is 'Forwarding' in a router?",
    options: { A: "Calculating the best path", B: "Moving a packet from input to output port", C: "Sending to the server", D: "Dropping bad packets" },
    answer: "B",
    explanation: "Forwarding is the local switching of packets within a router."
  },
  {
    id: 81,
    question: "What is the standard port for HTTPS?",
    options: { A: "80", B: "21", C: "443", D: "22" },
    answer: "C",
    explanation: "HTTPS uses port 443 for encrypted web communication."
  },
  {
    id: 82,
    question: "What does 'demultiplexing' rely on?",
    options: { A: "IP addresses only", B: "Port numbers", C: "MAC addresses", D: "TTL" },
    answer: "B",
    explanation: "Port numbers identify the specific process to which a segment belongs."
  },
  {
    id: 83,
    question: "What is the bottleneck link?",
    options: { A: "The longest link", B: "The slowest link on a path", C: "The first link", D: "The last link" },
    answer: "B",
    explanation: "The throughput is determined by the minimum capacity link in the path."
  },
  {
    id: 84,
    question: "Which protocol is used for 'ping' operations?",
    options: { A: "TCP", B: "UDP", C: "ICMP", D: "IGMP" },
    answer: "C",
    explanation: "Ping uses ICMP Echo requests."
  },
  {
    id: 85,
    question: "What is 'framing'?",
    options: { A: "Breaking data into bits", B: "Adding headers/trailers to datagrams", C: "Routing packets", D: "Encryption" },
    answer: "B",
    explanation: "Framing is the link layer process of encapsulating datagrams."
  },
  {
    id: 86,
    question: "Which layer provides 'reliable' delivery in the Internet?",
    options: { A: "Network", B: "Physical", C: "Transport (TCP)", D: "Link" },
    answer: "C",
    explanation: "TCP provides a reliable byte-stream service."
  },
  {
    id: 87,
    question: "What is 'multiplexing'?",
    options: { A: "Sharing a link", B: "Combining data from multiple sources", C: "Both", D: "Neither" },
    answer: "C",
    explanation: "Multiplexing allows multiple data streams to share a common medium."
  },
  {
    id: 88,
    question: "What is a 'flat' address?",
    options: { A: "IP address", B: "MAC address", C: "Port number", D: "DNS name" },
    answer: "B",
    explanation: "MAC addresses have no hierarchical structure; they are just unique IDs."
  },
  {
    id: 89,
    question: "What does 'P2P' stand for?",
    options: { A: "Point-to-Point", B: "Peer-to-Peer", C: "Packet-to-Packet", D: "Private-to-Private" },
    answer: "B",
    explanation: "Peer-to-Peer is a decentralized architecture."
  },
  {
    id: 90,
    question: "Which port is used for FTP control?",
    options: { A: "20", B: "21", C: "23", D: "25" },
    answer: "B",
    explanation: "FTP uses port 21 for control and 20 for data."
  },
  {
    id: 91,
    question: "What is 'nodal delay'?",
    options: { A: "Total path delay", B: "Delay at a single node", C: "Distance delay", D: "Processing time only" },
    answer: "B",
    explanation: "It is the sum of delays at one router."
  },
  {
    id: 92,
    question: "Which algorithm is used for Link State routing?",
    options: { A: "Bellman-Ford", B: "Dijkstra's", C: "BGP", D: "Flooding" },
    answer: "B",
    explanation: "Dijkstra's algorithm calculates the shortest path in LS routing."
  },
  {
    id: 93,
    question: "What does 'stateless' mean for HTTP?",
    options: { A: "No state kept between requests", B: "No connection kept", C: "No cookies", D: "No speed limits" },
    answer: "A",
    explanation: "The server does not remember previous requests from the same client."
  },
  {
    id: 94,
    question: "What is a 'datagram'?",
    options: { A: "Layer 4 packet", B: "Layer 3 packet", C: "Layer 2 packet", D: "Layer 7 packet" },
    answer: "B",
    explanation: "Datagram is the term for a network-layer packet."
  },
  {
    id: 95,
    question: "What is the primary function of ARP?",
    options: { A: "Resolve name to IP", B: "Resolve IP to MAC", C: "Assign IP", D: "Manage errors" },
    answer: "B",
    explanation: "Address Resolution Protocol finds the physical address from an IP."
  },
  {
    id: 96,
    question: "Which layer handles bit-error detection?",
    options: { A: "Physical", B: "Link", C: "Network", D: "All of above" },
    answer: "B",
    explanation: "The link layer uses checksums/CRCs to detect corrupted bits."
  },
  {
    id: 97,
    question: "What is 'store-and-forward'?",
    options: { A: "Forwarding bits immediately", B: "Buffering entire packet before sending", C: "Caching web pages", D: "P2P sharing" },
    answer: "B",
    explanation: "Routers must receive the full packet before forwarding."
  },
  {
    id: 98,
    question: "What is the size of an IPv4 header (minimum)?",
    options: { A: "10 bytes", B: "20 bytes", C: "40 bytes", D: "64 bytes" },
    answer: "B",
    explanation: "The base IPv4 header is 20 bytes long."
  },
  {
    id: 99,
    question: "Which protocol is used for intra-AS routing?",
    options: { A: "BGP", B: "OSPF", C: "IP", D: "DNS" },
    answer: "B",
    explanation: "OSPF and RIP are Interior Gateway Protocols (IGP)."
  },
  {
    id: 100,
    question: "What is the purpose of 'TTL'?",
    options: { A: "Speed up packets", B: "Prevent infinite looping", C: "Identify sender", D: "Verify checksum" },
    answer: "B",
    explanation: "Time-to-live discards packets that loop too many times."
  },
  {
    id: 101,
    question: "What is the difference between a hub and a switch?",
    options: {
      A: "Hubs are faster",
      B: "Switches are Layer 2 and isolate collision domains; hubs are Layer 1 and broadcast everything",
      C: "Hubs use IP addresses",
      D: "There is no difference"
    },
    answer: "B",
    explanation: "A switch forwards frames to specific ports based on MAC addresses; a hub broadcasts to all ports."
  },
  {
    id: 102,
    question: "In TCP, what does 'Cumulative ACK' mean?",
    options: {
      A: "ACK for every single bit",
      B: "ACK for all bytes up to the sequence number specified",
      C: "ACK only for the last packet",
      D: "ACK that combines multiple flows"
    },
    answer: "B",
    explanation: "A cumulative ACK confirms that all bytes before the acknowledged sequence number have been received successfully."
  },
  {
    id: 103,
    question: "Which of the following is an unguided transmission medium?",
    options: { A: "Coaxial cable", B: "Fiber optics", C: "Satellite radio", D: "Twisted pair" },
    answer: "C",
    explanation: "Unguided media transmit electromagnetic waves without using a physical conductor."
  },
  {
    id: 104,
    question: "What is the purpose of the 'Sequence Number' in a TCP segment?",
    options: {
      A: "To identify the sender",
      B: "To order segments and detect missing data",
      C: "To set the transmission speed",
      D: "To identify the application"
    },
    answer: "B",
    explanation: "Sequence numbers allow the receiver to reassemble data in the correct order and identify gaps."
  },
  {
    id: 105,
    question: "Which protocol uses a '4-tuple' for demultiplexing?",
    options: { A: "UDP", B: "TCP", C: "IP", D: "ICMP" },
    answer: "B",
    explanation: "TCP uses Source IP, Source Port, Destination IP, and Destination Port to identify a unique connection socket."
  },
  {
    id: 106,
    question: "What is the 'Maximum Segment Size' (MSS)?",
    options: {
      A: "The largest segment TCP can send without fragmentation",
      B: "The total size of the hard drive",
      C: "The length of the cable",
      D: "The number of users on a network"
    },
    answer: "A",
    explanation: "MSS is the largest amount of data, specified in bytes, that a device can handle in a single, unfragmented segment."
  },
  {
    id: 107,
    question: "What is 'Slow Start' in TCP?",
    options: {
      A: "A delay in booting the OS",
      B: "The initial phase of congestion control where window size grows exponentially",
      C: "A slow internet connection",
      D: "Waiting for a user to log in"
    },
    answer: "B",
    explanation: "Slow Start quickly probes the network's capacity by doubling the congestion window every RTT until a threshold is reached."
  },
  {
    id: 108,
    question: "Which layer is responsible for routing between different Autonomous Systems?",
    options: { A: "Link Layer", B: "Network Layer (via BGP)", C: "Transport Layer", D: "Application Layer" },
    answer: "B",
    explanation: "Inter-AS routing is a network layer function, with BGP being the primary protocol."
  },
  {
    id: 109,
    question: "What is 'Frequency Division Multiplexing' (FDM)?",
    options: {
      A: "Sharing a link by dividing it into different frequency bands",
      B: "Sharing a link by dividing it into time slots",
      C: "Sending data faster",
      D: "Encrypting different frequencies"
    },
    answer: "A",
    explanation: "FDM allocates distinct frequency channels to different users/streams on a single medium."
  },
  {
    id: 110,
    question: "What is the primary disadvantage of using a 'stop-and-wait' protocol?",
    options: {
      A: "It is too complex",
      B: "It has poor utilization because only one packet is in flight",
      C: "It is insecure",
      D: "It causes packet corruption"
    },
    answer: "B",
    explanation: "Stop-and-wait forces the sender to wait for an ACK before sending the next packet, wasting bandwidth."
  },
  {
    id: 111,
    question: "In the context of the Internet, what is a 'Tier-1 ISP'?",
    options: {
      A: "A local cable provider",
      B: "An ISP with a global network that peers with other Tier-1s without paying for transit",
      C: "A mobile network operator",
      D: "A web hosting company"
    },
    answer: "B",
    explanation: "Tier-1 ISPs form the backbone of the Internet and exchange traffic freely with one another."
  },
  {
    id: 112,
    question: "What is 'Propagation Delay'?",
    options: {
      A: "Time to push bits onto the link",
      B: "Time for a bit to travel the distance between source and destination",
      C: "Time spent in a router queue",
      D: "Time to process a header"
    },
    answer: "B",
    explanation: "Propagation delay is distance divided by the speed of light in the medium."
  },
  {
    id: 113,
    question: "Which protocol is used to provide 'reliable' file transfer?",
    options: { A: "UDP", B: "FTP (over TCP)", C: "TFTP", D: "IP" },
    answer: "B",
    explanation: "FTP uses TCP to ensure that files are transferred without errors or missing data."
  },
  {
    id: 114,
    question: "What is the 'Checksum' used for in UDP?",
    options: { A: "Encryption", B: "Error detection in the header and payload", C: "Routing", D: "Flow control" },
    answer: "B",
    explanation: "The UDP checksum provides a simple way to check if bits have been flipped during transmission."
  },
  {
    id: 115,
    question: "What is 'Packet Switching'?",
    options: {
      A: "Establishing a dedicated circuit",
      B: "Dividing data into chunks (packets) and sharing link resources on-demand",
      C: "Switching between different internet providers",
      D: "A type of physical switch hardware"
    },
    answer: "B",
    explanation: "Packet switching uses statistical multiplexing to efficiently share network resources."
  },
  {
    id: 116,
    question: "What is the 'Application Architecture' of BitTorrent?",
    options: { A: "Client-Server", B: "P2P", C: "Hybrid", D: "Monolithic" },
    answer: "B",
    explanation: "BitTorrent is a classic example of a Peer-to-Peer architecture where files are shared directly between users."
  },
  {
    id: 117,
    question: "What is the purpose of 'Port 53'?",
    options: { A: "Web", B: "Email", C: "DNS", D: "Files" },
    answer: "C",
    explanation: "DNS servers listen for queries on port 53."
  },
  {
    id: 118,
    question: "Which of the following is a key feature of HTTP/2?",
    options: {
      A: "It is text-based",
      B: "It supports request/response multiplexing over a single TCP connection",
      C: "It does not use headers",
      D: "It only works over UDP"
    },
    answer: "B",
    explanation: "HTTP/2 introduced binary framing and multiplexing to solve the head-of-line blocking problem in HTTP/1.1."
  },
  {
    id: 119,
    question: "What is 'Fast Retransmit' in TCP?",
    options: {
      A: "A way to send data faster",
      B: "Retransmitting a segment after receiving 3 duplicate ACKs before the timer expires",
      C: "Increasing the clock speed of the NIC",
      D: "Skipping the handshake"
    },
    answer: "B",
    explanation: "Fast retransmit allows TCP to recover from losses more quickly by not waiting for a full timeout."
  },
  {
    id: 120,
    question: "Which layer is responsible for translating between IP and MAC?",
    options: { A: "Network", B: "Link (using ARP)", C: "Transport", D: "Application" },
    answer: "B",
    explanation: "ARP operates at the interface between the network and link layers."
  },
  {
    id: 121,
    question: "What is the purpose of the 'Flow Control' window in TCP?",
    options: {
      A: "To prevent the network from getting congested",
      B: "To prevent the sender from overflowing the receiver's buffer",
      C: "To speed up the connection",
      D: "To verify the identity of the server"
    },
    answer: "B",
    explanation: "The receive window (rwnd) advertised by the receiver tells the sender how much space is available in the buffer."
  },
  {
    id: 122,
    question: "What is a 'Distributed Hash Table' (DHT)?",
    options: {
      A: "A way to encrypt data",
      B: "A decentralized system for mapping keys to values in a P2P network",
      C: "A type of router table",
      D: "A speed-up for DNS"
    },
    answer: "B",
    explanation: "DHTs are used in P2P networks like BitTorrent to find peers without a central tracker."
  },
  {
    id: 123,
    question: "What is 'Head-of-Line' (HOL) blocking in a router?",
    options: {
      A: "The CPU being too slow",
      B: "A packet at the front of a queue blocking others behind it destined for different output ports",
      C: "The internet being down",
      D: "The power being cut"
    },
    answer: "B",
    explanation: "HOL blocking occurs at input ports when a packet cannot move because its destination port is busy, even if packets behind it could move."
  },
  {
    id: 124,
    question: "What is 'Statistical Multiplexing'?",
    options: {
      A: "Giving every user a fixed time slot",
      B: "Allocating link resources based on demand (actual traffic)",
      C: "Calculating packet statistics",
      D: "Encrypting statistics"
    },
    answer: "B",
    explanation: "Statistical multiplexing is more efficient than TDM/FDM because it doesn't waste resources on idle users."
  },
  {
    id: 125,
    question: "What is the primary role of an 'Autonomous System' (AS)?",
    options: {
      A: "To automate network tasks",
      B: "A group of networks under a single administrative control (like an ISP)",
      C: "To provide AI-based routing",
      D: "To manage individual home networks"
    },
    answer: "B",
    explanation: "The Internet is a 'network of networks', where each network (AS) has its own routing policy."
  },
  {
    id: 126,
    question: "Which port is used for DNS queries?",
    options: { A: "53", B: "80", C: "25", D: "443" },
    answer: "A",
    explanation: "DNS typically uses UDP port 53 for standard lookups."
  },
  {
    id: 127,
    question: "What is 'Distance Vector' routing?",
    options: {
      A: "Routing based on the speed of light",
      B: "Routing where each node shares its entire table with neighbors periodically",
      C: "Routing using a map of the whole network",
      D: "Routing based on IP addresses only"
    },
    answer: "B",
    explanation: "Distance Vector algorithms (like RIP) are iterative and distributed, based on the Bellman-Ford equation."
  },
  {
    id: 128,
    question: "What is 'Link State' routing?",
    options: {
      A: "Routing where each node broadcasts its link status to the whole network",
      B: "Routing based on the state of the user",
      C: "Routing that uses only one link",
      D: "A slower version of distance vector"
    },
    answer: "A",
    explanation: "Link state protocols (like OSPF) allow every router to build a complete topology map."
  },
  {
    id: 129,
    question: "What is the 'Three-Way Handshake' in TCP?",
    options: {
      A: "SYN, SYN-ACK, ACK",
      B: "Hello, Hi, OK",
      C: "Request, Data, Close",
      D: "Connect, Transfer, Finish"
    },
    answer: "A",
    explanation: "The three steps required to establish a TCP connection."
  },
  {
    id: 130,
    question: "Which protocol is used for intra-domain routing and uses Dijkstra's algorithm?",
    options: { A: "BGP", B: "RIP", C: "OSPF", D: "IP" },
    answer: "C",
    explanation: "Open Shortest Path First (OSPF) is a link-state protocol used within an AS."
  },
  {
    id: 131,
    question: "What does 'DHCP' stand for?",
    options: {
      A: "Data Host Connection Protocol",
      B: "Dynamic Host Configuration Protocol",
      C: "Direct Host Control Protocol",
      D: "Digital Home Connection Port"
    },
    answer: "B",
    explanation: "DHCP dynamically assigns network parameters to hosts."
  },
  {
    id: 132,
    question: "What is the size of the IPv6 address space compared to IPv4?",
    options: { A: "2 times larger", B: "4 times larger", C: "2^96 times larger", D: "10 times larger" },
    answer: "C",
    explanation: "IPv6 uses 128 bits, while IPv4 uses 32 bits. The difference is 2^(128-32) = 2^96."
  },
  {
    id: 133,
    question: "What is 'ICMP'?",
    options: {
      A: "A protocol for data transfer",
      B: "A protocol used by hosts/routers to communicate network-layer information",
      C: "A type of physical connector",
      D: "A web browser protocol"
    },
    answer: "B",
    explanation: "ICMP handles error reporting and connectivity tests (like ping and traceroute)."
  },
  {
    id: 134,
    question: "What is 'Anycast' in IPv6?",
    options: {
      A: "Sending to all nodes",
      B: "Sending to a single node in a group (the closest one)",
      C: "Sending to a specific node",
      D: "Broadcasting"
    },
    answer: "B",
    explanation: "Anycast routes a packet to the 'nearest' of several potential destinations."
  },
  {
    id: 135,
    question: "What is the purpose of a 'Checksum'?",
    options: { A: "To speed up data", B: "To detect errors/corruption in a packet", C: "To encrypt data", D: "To route data" },
    answer: "B",
    explanation: "A checksum is a mathematical value used to verify data integrity."
  },
  {
    id: 136,
    question: "What is 'Fragmentation' in IP?",
    options: {
      A: "Breaking a datagram into smaller pieces to fit a link's MTU",
      B: "Splitting a file into pieces at the application layer",
      C: "A hard drive error",
      D: "Breaking a connection"
    },
    answer: "A",
    explanation: "If a datagram is larger than the link's Maximum Transmission Unit (MTU), it must be fragmented."
  },
  {
    id: 137,
    question: "What is the 'Subnet Mask'?",
    options: {
      A: "A way to hide your IP",
      B: "A 32-bit value used to distinguish the network portion of an IP from the host portion",
      C: "A physical cover for a router",
      D: "An encryption key"
    },
    answer: "B",
    explanation: "The mask determines which part of the IP address refers to the network/subnet."
  },
  {
    id: 138,
    question: "What is 'NAT' (Network Address Translation)?",
    options: {
      A: "A way to translate languages",
      B: "A method to share one public IP address among multiple private IP hosts",
      C: "A new type of IP address",
      D: "A routing protocol"
    },
    answer: "B",
    explanation: "NAT allows a whole home/office network to use a single public IP address."
  },
  {
    id: 139,
    question: "What is 'BGP' (Border Gateway Protocol)?",
    options: {
      A: "The 'glue' that holds the Internet together by routing between ASs",
      B: "A protocol for sending email",
      C: "A way to browse the web",
      D: "A LAN protocol"
    },
    answer: "A",
    explanation: "BGP is the de facto standard inter-domain routing protocol."
  },
  {
    id: 140,
    question: "Which layer is responsible for path determination and logical addressing?",
    options: { A: "Link", B: "Network", C: "Transport", D: "Physical" },
    answer: "B",
    explanation: "The Network Layer handles routing and IP addressing."
  },
  {
    id: 141,
    question: "What is 'CSMA/CD'?",
    options: {
      A: "A protocol for wireless networks",
      B: "Carrier Sense Multiple Access with Collision Detection (used in Ethernet)",
      C: "A type of encryption",
      D: "A routing algorithm"
    },
    answer: "B",
    explanation: "Standard used in wired Ethernet to manage access to a shared medium."
  },
  {
    id: 142,
    question: "What is 'MAC' address also known as?",
    options: { A: "Logical address", B: "Physical address", C: "Static IP", D: "Dynamic IP" },
    answer: "B",
    explanation: "MAC addresses are burned into the hardware and are physically unique."
  },
  {
    id: 143,
    question: "What is an 'Ethernet Switch'?",
    options: {
      A: "A Layer 1 device",
      B: "A Layer 2 device that filters and forwards frames based on MAC addresses",
      C: "A device for connecting to the phone line",
      D: "A type of cable"
    },
    answer: "B",
    explanation: "Switches are smarter than hubs and only send frames to the intended recipient."
  },
  {
    id: 144,
    question: "What is 'VLAN' (Virtual LAN)?",
    options: {
      A: "A physical cable",
      B: "A way to partition a single physical switch into multiple logical networks",
      C: "A fast type of internet",
      D: "A security firewall"
    },
    answer: "B",
    explanation: "VLANs provide logical isolation and flexibility in network management."
  },
  {
    id: 145,
    question: "Which of the following is a link-layer protocol?",
    options: { A: "TCP", B: "IP", C: "Ethernet", D: "HTTP" },
    answer: "C",
    explanation: "Ethernet is the most widely used link-layer technology."
  },
  {
    id: 146,
    question: "What is the 'Payload' of a frame?",
    options: { A: "The header", B: "The trailer", C: "The encapsulated datagram", D: "The MAC address" },
    answer: "C",
    explanation: "The payload is the data being carried from the higher layer."
  },
  {
    id: 147,
    question: "What is 'Full-Duplex' communication?",
    options: {
      A: "Only one side can send at a time",
      B: "Both sides can send and receive simultaneously",
      C: "No one can send",
      D: "Data only flows one way"
    },
    answer: "B",
    explanation: "Modern Ethernet links are typically full-duplex."
  },
  {
    id: 148,
    question: "What is the purpose of 'Error Correction' in the link layer?",
    options: {
      A: "To speed up the internet",
      B: "To reconstruct original bits from corrupted received bits",
      C: "To find the best route",
      D: "To assign IPs"
    },
    answer: "B",
    explanation: "Techniques like Forward Error Correction (FEC) help recover from bit errors."
  },
  {
    id: 149,
    question: "What is 'PPP' (Point-to-Point Protocol)?",
    options: {
      A: "A protocol for P2P sharing",
      B: "A link-layer protocol used for direct connections between two nodes",
      C: "A way to encrypt passwords",
      D: "A type of physical port"
    },
    answer: "B",
    explanation: "PPP is often used for dial-up and some broadband connections."
  },
  {
    id: 150,
    question: "What is the ultimate goal of the protocol stack?",
    options: {
      A: "To make networking complex",
      B: "To provide a structured way for different systems to communicate seamlessly",
      C: "To sell more hardware",
      D: "To replace the internet"
    },
    answer: "B",
    explanation: "Layering provides modularity and allows the internet to scale and evolve."
  }
];
