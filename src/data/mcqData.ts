export const TestMcqQuestions = [
  {
    id: 1,
    question:
      "UDP does not add anything to the services of IP except for providing ____ communication.",
    options: {
      A: "host-to-host",
      B: "node-to-node",
      C: "process-to-process",
      D: "none of the above",
    },
    answer: "C",
    explanation: "UDP extends IP's host-to-host delivery service to a process-to-process delivery service using port numbers.",
  },
  {
    id: 2,
    question:
      "Suppose two end systems are connected by a channel with a transmission rate of 1 Gbps. With a packet size of 8,000 bits per packet, the time needed to actually transmit the packet into the 1 Gbps link will be what?",
    options: {
      A: "8 minisecs",
      B: "8 sec",
      C: "0.8 microsecs",
      D: "8 microsecs",
    },
    answer: "D",
    explanation:
      "Transmission time = Packet size / Transmission rate = 8,000 bits / 1 Gbps = 8,000 bits / 1,000,000,000 bits/sec = 8 microseconds",
  },
  {
    id: 3,
    question: "Beyond IP, UDP provides additional services such as ______",
    options: {
      A: "Routing and switching",
      B: "Sending and receiving of packets",
      C: "Multiplexing and demultiplexing",
      D: "Demultiplexing and error checking",
    },
    answer: "D",
    explanation: "Beyond simple process-to-process delivery, UDP provides multiplexing/demultiplexing and lightweight error checking through its checksum field.",
  },
  {
    id: 4,
    question: "____ is the measurement of useful data flowing through a link",
    options: {
      A: "Goodput",
      B: "Throughput",
      C: "Bandwidth",
      D: "Speed",
      E: "None of the above",
    },
    answer: "A",
    explanation:
      "Goodput is the actual amount of useful data (application layer data) transmitted successfully over a link, excluding protocol overhead and retransmissions.",
  },
  {
    id: 5,
    question: "The underlying Transport layer protocol used by SMTP is ____.",
    options: {
      A: "IMAP",
      B: "UDP",
      C: "Either TCP or UDP",
      D: "TCP",
    },
    answer: "D",
    explanation: "SMTP (Simple Mail Transfer Protocol) requires reliable delivery for email messages, which is provided by the TCP protocol.",
  },
  {
    id: 6,
    question: "Which of the following statements is FALSE?",
    options: {
      A: "The most fundamental responsibility of UDP and TCP is to extend IP's delivery service between two end systems to a delivery service between two processes running on the end systems.",
      B: "Extending host-to-host delivery to process-to-process delivery is called transport-layer multiplexing and demultiplexing",
      C: "A process (as part of a network application) can have one or more sockets.",
      D: "A UDP socket is fully identified by a four-tuple consisting of source IP address, source port number, destination IP address, destination port number.",
      E: "Two arriving TCP segments with different source IP addresses or source port numbers will be directed to two different sockets.",
    },
    answer: "D",
    explanation:
      "A UDP socket is identified by a 2-tuple (destination IP address, destination port number). It is TCP sockets that are identified by a 4-tuple.",
  },
  {
    id: 7,
    question:
      "The ____ and ____ layers provide logical communication between hosts and between processes, respectively.",
    options: {
      A: "network and transport",
      B: "application and transport",
      C: "transport and network",
      D: "physical and transport",
      E: "none of these",
    },
    answer: "A",
    explanation: "The network layer provides logical communication between hosts, while the transport layer provides logical communication between processes running on those hosts.",
  },
  {
    id: 8,
    question:
      "Which protocol does FTP use for transferring the files in the network?",
    options: {
      A: "UDP",
      B: "TCP",
      C: "ICMP",
      D: "ARP",
    },
    answer: "B",
    explanation: "FTP (File Transfer Protocol) uses TCP to ensure that files are transferred reliably and in the correct order.",
  },
  {
    id: 9,
    question:
      "A mechanism that is used to convert domain names into IP addresses is known as ____",
    options: {
      A: "URL",
      B: "DNS",
      C: "FTP",
      D: "HTTP",
    },
    answer: "B",
    explanation: "DNS (Domain Name System) acts like a phonebook for the internet, translating human-friendly names like 'google.com' into numeric IP addresses.",
  },
  {
    id: 10,
    question: "In ____ systems, resources are allocated on demand.",
    options: {
      A: "packet switching",
      B: "circuit switching",
      C: "line switching",
      D: "frequency switching",
    },
    answer: "A",
    explanation: "In packet-switched networks, resources are not reserved; instead, they are used on demand as packets arrive at routers (statistical multiplexing).",
  },
  {
    id: 11,
    question: "Which of the following is false with respect to UDP?",
    options: {
      A: "Unreliable",
      B: "Transport layer protocol",
      C: "Connection-oriented",
      D: "Low overhead",
    },
    answer: "C",
    explanation:
      "UDP is connectionless, meaning it does not establish a session before sending data. TCP is the connection-oriented counterpart.",
  },
  {
    id: 12,
    question:
      "Dijkstra's Algorithm is more efficient than Bellmann Ford Algorithm.",
    options: {
      A: "True",
      B: "False",
    },
    answer: "A",
    explanation:
      "Dijkstra's Algorithm has a better time complexity (O(E log V)) compared to Bellman-Ford (O(VE)), making it more efficient for networks without negative edge weights.",
  },
  {
    id: 13,
    question:
      "____ is a method whereby routing tables at each router get modified by information from incoming packets.",
    options: {
      A: "Flooding",
      B: "Hot Potato",
      C: "Random Walk",
      D: "Backward Learning",
      E: "None of the above",
    },
    answer: "D",
    explanation: "Backward learning (or self-learning) is used by switches and routers to learn which hosts are reachable through which ports by observing the source addresses of incoming packets.",
  },
  {
    id: 14,
    question: "Identify the protocol primarily used for browsing data.",
    options: {
      A: "FTP",
      B: "TCP",
      C: "TFTP",
      D: "HTTP",
    },
    answer: "D",
    explanation: "HTTP (Hypertext Transfer Protocol) is the primary protocol used by web browsers to request and receive data from web servers.",
  },
  {
    id: 15,
    question:
      "Which of the following statements is/are true for connectionless network?",
    options: {
      A: "Not required so much information for storing",
      B: "No need to established a connection.",
      C: "Randomly packets distributed.",
      D: "All of the above.",
      E: "None of the above.",
    },
    answer: "D",
    explanation: "Connectionless networks (like IP) do not require a setup phase, store very little state at the routers, and treat each packet as an independent unit.",
  },
  {
    id: 16,
    question: "The main job of the network layer is to ____",
    options: {
      A: "provide the best route",
      B: "multiplex and demultiplex",
      C: "provide logical communication between processes running on different hosts",
      D: "ALL of the above",
    },
    answer: "A",
    explanation: "The primary function of the network layer is routing (finding the best path) and forwarding packets across the network of networks.",
  },
  {
    id: 17,
    question:
      "The _____ field is used to detect errors over the entire user datagram.",
    options: {
      A: "udp header",
      B: "checksum",
      C: "source port",
      D: "destination port",
    },
    answer: "B",
    explanation: "The checksum is a simple error-detection field used by transport layer protocols to verify that the data hasn't been corrupted during transmission.",
  },
  {
    id: 18,
    question: "What is the default port of HTTP?",
    options: {
      A: "20",
      B: "101",
      C: "80",
      D: "60",
      E: "can't really say",
    },
    answer: "C",
    explanation: "Port 80 is the standard, well-known port reserved for HTTP web traffic.",
  },
  {
    id: 19,
    question:
      "Which of the following best describes the difference between UDP and TCP?",
    options: {
      A: "UDP has lower overhead and no reliability guarantees",
      B: "TCP is connectionless, UDP is connection-oriented",
      C: "UDP provides congestion control, TCP does not",
      D: "TCP does not support flow control",
    },
    answer: "A",
    explanation: "UDP is a 'bare-bones' protocol with minimal overhead and no reliability, while TCP provides a reliable, ordered, and error-checked stream of data.",
  },
  {
    id: 20,
    question:
      "Which of the following protocols operates at the Application Layer and is primarily used for secure web communication?",
    options: {
      A: "FTP",
      B: "HTTP",
      C: "HTTPS",
      D: "TCP",
    },
    answer: "C",
    explanation: "HTTPS (HTTP Secure) uses encryption (TLS/SSL) to protect data transferred between a web browser and a server.",
  },
  {
    id: 21,
    question:
      "The job of delivering data in a transport-layer segment to the correct socket is called ____.",
    options: {
      A: "Multiplexing",
      B: "demultiplexing",
      C: "Encapsulation",
      D: "Decapsulation",
    },
    answer: "B",
    explanation: "Demultiplexing is the process of using the destination port number in a segment to deliver the payload to the correct application socket.",
  },
  {
    id: 22,
    question:
      "In Go-Back-N window, when the timer of the packet times out, several packets have to be resent even some may have arrived safe. Whereas in Selective Repeat window, the sender resends ____",
    options: {
      A: "Packets which are not lost",
      B: "Only those packets which are lost or corrupted",
      C: "Packet from starting",
      D: "All the packets",
    },
    answer: "B",
    explanation: "Selective Repeat is more efficient than Go-Back-N because it only retransmits the specific segments that were not acknowledged.",
  },
  {
    id: 23,
    question: "Which network layer do routers primarily operate on?",
    options: {
      A: "Physical Layer",
      B: "Data Link Layer",
      C: "Network Layer",
      D: "Transport Layer",
    },
    answer: "C",
    explanation: "Routers are Layer 3 devices that make forwarding decisions based on network layer (IP) addresses.",
  },
  {
    id: 24,
    question: "Cyclic redundancy check uses",
    options: {
      A: "Multiplication",
      B: "Binary division",
      C: "Multiplication & Binary division",
      D: "None of the mentioned",
    },
    answer: "B",
    explanation: "CRC (Cyclic Redundancy Check) uses binary polynomial division (modulo-2 arithmetic) to generate a frame check sequence.",
  },
  {
    id: 25,
    question: "In TCP, what is the primary purpose of the ACK number field?",
    options: {
      A: "To indicate the sequence number of the next expected byte",
      B: "To confirm packet delivery at the physical layer",
      C: "To control congestion window size",
      D: "To specify the sender's port number",
    },
    answer: "A",
    explanation: "In TCP, the acknowledgement number indicates the sequence number of the next byte that the receiver is expecting to receive.",
  },
  {
    id: 26,
    question: "What is packetizing?",
    options: {
      A: "It is a process of dividing a long message into smaller ones.",
      B: "It is a process of encapsulating the packets into the data fields of the transport layer packet.",
      C: "It is a process of an adding headers to each packet to allow the transport layer for performing its other functions.",
      D: "All of the above.",
    },
    answer: "A",
    explanation: "Packetizing is the process of breaking down a large application message into smaller segments or packets for transmission over the network.",
  },
  {
    id: 27,
    question: "Which of the following statements is false",
    options: {
      A: "Transport-layer protocols live in the end systems.",
      B: "Within an end system, a transport protocol moves messages from application processes to the network edge and vice versa.",
      C: "A transport protocol doesn't have any say about how messages are moved within the network core.",
      D: "Intermediate routers neither act on, nor recognize, any information that the transport layer may have added to the application messages.",
      E: "None of the mentioned",
    },
    answer: "E",
    explanation: "All the statements are true: transport protocols run on hosts, facilitate process-to-process data movement, and are transparent to routers in the network core.",
  },
  {
    id: 28,
    question:
      "To receive e-mail messages from an e-mail server, the e-mail client can use which of the following protocols?",
    options: {
      A: "POP",
      B: "SSH",
      C: "SMTP",
      D: "STP",
    },
    answer: "A",
    explanation:
      "POP (Post Office Protocol) and IMAP are used by clients to retrieve/receive email. SMTP is used for sending or transferring email between servers.",
  },
  {
    id: 29,
    question:
      "Which of the following is a characteristic of distance-vector routing protocols like RIP?",
    options: {
      A: "Uses Dijkstra's algorithm",
      B: "Maintains full network topology",
      C: "Converges instantly",
      D: "Periodically shares routing tables with neighbors",
    },
    answer: "D",
    explanation: "Distance-vector protocols (like RIP) function by periodically sending their entire routing table to their immediate neighbors.",
  },
  {
    id: 30,
    question: "Which of the following statements is FALSE?",
    options: {
      A: "A switch connects multiple devices to create a network",
      B: "A router connects multiple switches, and their respective networks, to form an even larger network.",
      C: "The main objective of router is to connect various networks simultaneously and it works in the network layer",
      D: "The main objective of switch is to connect various devices simultaneously and it works in the transport layer.",
      E: "An access network is the part of the network that connects individual users or households to the service provider's network.",
    },
    answer: "D",
    explanation:
      "Switches operate at the Data Link Layer (Layer 2) of the OSI model, not the Transport Layer.",
  },
  {
    id: 31,
    question: "The term IPv4 stands for ____",
    options: {
      A: "Internet Protocol Version 4",
      B: "Internet Programming Version 4",
      C: "International Programming Version 4",
      D: "None of these",
    },
    answer: "A",
    explanation: "IPv4 is the fourth version of the Internet Protocol and uses 32-bit addresses.",
  },
  {
    id: 32,
    question: "In Selective Repeat, when a timeout occurs, the timer is ______",
    options: {
      A: "stopped",
      B: "started",
      C: "reset (stopped and started)",
      D: "None of the choices are correct",
    },
    answer: "C",
    explanation: "In Selective Repeat, each packet has its own timer; if a packet times out, its timer is reset after retransmission.",
  },
  {
    id: 33,
    question:
      "Which of the following statements is/are not true for connection-oriented network?",
    options: {
      A: "It doesn't give guarantee of service.",
      B: "It takes less time for sending the packets.",
      C: "Utilization of resources is good.",
      D: "Both a and c",
      E: "All of the above",
    },
    answer: "E",
    explanation: "Connection-oriented (circuit-switched) networks usually provide guarantees (making A not true), have high setup time (making B not true), and dedicated resources lead to poor utilization (making C not true).",
  },
  {
    id: 34,
    question: "Which can detect two bit errors?",
    options: {
      A: "Parity check",
      B: "Parity & Cyclic redundancy check",
      C: "Cyclic redundancy check",
      D: "None of the mentioned",
    },
    answer: "C",
    explanation: "CRC (Cyclic Redundancy Check) is a powerful error-detection method capable of detecting various types of errors, including multi-bit errors.",
  },
  {
    id: 35,
    question:
      "ISP exchanges internet traffic between their networks by ________",
    options: {
      A: "internet exchange point",
      B: "subscriber end point",
      C: "isp end point",
      D: "internet end point",
    },
    answer: "A",
    explanation: "Internet Exchange Points (IXPs) are physical infrastructures that allow different ISPs to exchange internet traffic between their autonomous systems.",
  },
  {
    id: 36,
    question:
      "Which of the following devices is an intermediary network device?",
    options: {
      A: "Host",
      B: "Switch",
      C: "Printer",
      D: "Server",
    },
    answer: "B",
    explanation: "Intermediary devices like switches and routers connect end systems and manage the flow of data within the network.",
  },
  {
    id: 37,
    question:
      "At the transport layer, to define the processes, we need two identifiers called ____.",
    options: {
      A: "logical addresses",
      B: "physical addresses",
      C: "port addresses",
      D: "all of the above",
    },
    answer: "C",
    explanation: "Port numbers are used at the transport layer to identify unique processes running on a host.",
  },
  {
    id: 38,
    question:
      "What information does a link-layer switch use to forward data packets?",
    options: {
      A: "IP address",
      B: "MAC address",
      C: "Port number",
      D: "Network address",
    },
    answer: "B",
    explanation: "Link-layer switches operate at Layer 2 and use hardware (MAC) addresses to decide where to forward frames.",
  },
  {
    id: 39,
    question: "Dijkstra's Algorithm cannot be applied on ___?",
    options: {
      A: "Directed and weighted graphs",
      B: "Graphs having negative weight function",
      C: "Unweighted graphs",
      D: "Undirected and unweighted graphs",
      E: "None of the above",
    },
    answer: "B",
    explanation: "Dijkstra's algorithm assumes non-negative weights; negative edges can cause the algorithm to find incorrect shortest paths.",
  },
  {
    id: 40,
    question: "What are nodes in a computer network?",
    options: {
      A: "the computer that routes the data",
      B: "the computer that terminates the data",
      C: "the computer that originates the data",
      D: "all of the mentioned",
    },
    answer: "D",
    explanation: "A node is any connection point in a network that can transmit, receive, or forward information.",
  },
  {
    id: 41,
    question:
      "One of the main duties of the transport layer is to provide ______ communication.",
    options: {
      A: "node-to-node",
      B: "host-to-host",
      C: "process-to-process",
      D: "None of the choices are correct",
    },
    answer: "C",
    explanation: "The core mission of the transport layer is ensuring data gets from a specific process on one host to a specific process on another host.",
  },
  {
    id: 42,
    question: "What is internet?",
    options: {
      A: "a single network",
      B: "a vast collection of different networks",
      C: "interconnection of local area networks",
      D: "interconnection of wide area networks",
    },
    answer: "B",
    explanation: "The Internet is a global network of networks that connects millions of private, public, academic, and government networks.",
  },
  {
    id: 43,
    question: "The size of an IP address in IPv6 is ________",
    options: {
      A: "32 bits",
      B: "64 bits",
      C: "128 bits",
      D: "265 bits",
    },
    answer: "C",
    explanation: "IPv6 uses 128-bit addresses, allowing for a virtually unlimited number of unique IP addresses.",
  },
  {
    id: 44,
    question: "What is the basic principle behind Bellmann Ford Algorithm?",
    options: {
      A: "Interpolation",
      B: "Extrapolation",
      C: "Regression",
      D: "Relaxation",
      E: "None of the above",
    },
    answer: "D",
    explanation: "The Bellman-Ford algorithm uses the principle of relaxation to iteratively update the shortest path distance to all nodes.",
  },
  {
    id: 45,
    question:
      "In distance vector routing algorithm, the routing tables are updated __",
    options: {
      A: "by exchanging information with the neighbours",
      B: "by exchanging information with every other routing table in the network",
      C: "automatically",
      D: "using the backup routing table",
      E: "by the server",
    },
    answer: "A",
    explanation: "In distance-vector protocols, routers only exchange their tables with direct neighbors; information eventually propagates throughout the network.",
  },
  {
    id: 46,
    question:
      "What IP address class allocates 8 bits for the host identification part?",
    options: {
      A: "Class A",
      B: "Class B",
      C: "Class C",
      D: "Class D",
    },
    answer: "C",
    explanation: "Class C IP addresses use a 24-bit network prefix and leave 8 bits for the host ID (up to 254 hosts per network).",
  },
  {
    id: 47,
    question: "Which of the following maintains the Domain Name System?",
    options: {
      A: "a single server",
      B: "a single computer",
      C: "distributed database system",
      D: "none of the mentioned",
    },
    answer: "C",
    explanation: "DNS is a distributed database system that spreads the responsibility of hostname resolution across many servers worldwide.",
  },
  {
    id: 48,
    question: "Most packet switches use this principle __________",
    options: {
      A: "Stop and wait",
      B: "Store and forward",
      C: "Store and wait",
      D: "Stop and forward",
    },
    answer: "B",
    explanation: "Store-and-forward means the switch must receive the entire packet before it can begin transmitting it on the outbound link.",
  },
  {
    id: 49,
    question: "Which of this is not a network edge device?",
    options: {
      A: "Switch",
      B: "PC",
      C: "Smartphones",
      D: "Servers",
    },
    answer: "A",
    explanation:
      "A switch is an intermediary network device, not an edge device. Edge devices are end systems like PCs, smartphones, and servers.",
  },
  {
    id: 50,
    question:
      "What type of network must a home user access in order to do online shopping?",
    options: {
      A: "LAN",
      B: "Intranet",
      C: "Extranet",
      D: "Internet",
    },
    answer: "D",
    explanation: "Online shopping requires access to the public Internet to communicate with web servers worldwide.",
  },
  {
    id: 51,
    question:
      "What do distance vector algorithms require each router in the network to send?",
    options: {
      A: "A partial routing table to each router in the LAN",
      B: "A partial routing table to each router in the WAN",
      C: "The entire routing table to each neighboring router",
      D: "The entire routing table to each router in the autonomous system",
      E: "None of the above mentioned",
    },
    answer: "C",
    explanation: "Each router in a distance-vector system sends its entire routing table periodically to all its immediate neighbors.",
  },
  {
    id: 52,
    question:
      "In a ____ protocol, the receiver discards correctly received (but out-of-order) packets.",
    options: {
      A: "Go-Back-N",
      B: "selective repeat",
      C: "pipelining",
      D: "None of the above",
    },
    answer: "A",
    explanation: "Go-Back-N is simpler than Selective Repeat because the receiver only maintains a single expected sequence number and discards out-of-order packets.",
  },
  {
    id: 53,
    question: "Transmission delay does not depend on ____.",
    options: {
      A: "Packet length",
      B: "Transmission rate",
      C: "Bandwidth of medium",
      D: "Distance between the routers",
    },
    answer: "D",
    explanation:
      "Transmission delay (L/R) depends on the packet size and the link rate. Distance between routers affects propagation delay, not transmission delay.",
  },
  {
    id: 54,
    question:
      "Which of the following is true about distributed adaptive routing",
    options: {
      A: "The packet may be sent through a congested route resulting in a delay.",
      B: "If the central router goes down the entire network is down.",
      C: "If something changes in-between the interval a router receives information and sends the packet, then the packet may be delayed",
      D: "All of the above",
      E: "None of the above",
    },
    answer: "A",
    explanation: "In distributed adaptive routing, decisions are made locally based on current conditions, which can lead to delays if routes become congested.",
  },
  {
    id: 55,
    question:
      "Given L = number of bits in the packet, a = average rate and R = transmission rate. The traffic intensity in the network is given by ____.",
    options: {
      A: "La/R",
      B: "LR/a",
      C: "R/La",
      D: "Ra/L",
    },
    answer: "A",
    explanation:
      "Traffic intensity (La/R) measures the load on a network; as it approaches 1, queuing delays increase exponentially.",
  },
  {
    id: 56,
    question:
      "In link-state routing, the updating packet conveys the knowledge of the router about ____",
    options: {
      A: "the whole internetwork",
      B: "the neighborhood",
      C: "either a or b",
      D: "neither a nor be",
    },
    answer: "B",
    explanation: "Link-state packets contain information about a router's direct neighbors (its 'links'). This info is then flooded so everyone can build a full map.",
  },
  {
    id: 57,
    question:
      "When a mail server sends mail to other mail servers it becomes ____. ?",
    options: {
      A: "SMTP client",
      B: "SMTP server",
      C: "Peer",
      D: "Master",
    },
    answer: "A",
    explanation: "In the SMTP protocol, the sending server initiates the connection and acts as the client during that session.",
  },
  {
    id: 58,
    question: "The following are types of network latency except:",
    options: {
      A: "Propagation delay",
      B: "Access delay",
      C: "Switching delay",
      D: "Queuing delay",
      E: "Session delay",
    },
    answer: "E",
    explanation: "Propagation, access, switching, and queuing are standard network delay components. 'Session delay' is not a standard network layer latency term.",
  },
  {
    id: 59,
    question:
      "Which of the following factors most directly affects network latency?",
    options: {
      A: "Packet size only",
      B: "Propagation delay, transmission delay, and queuing delay",
      C: "Number of IP addresses",
      D: "Type of operating system",
    },
    answer: "B",
    explanation: "Network latency is the total time it takes for data to travel across a network, primarily composed of propagation, transmission, and queuing delays.",
  },
  {
    id: 60,
    question: "In cyclic redundancy checking, the divisor is ____ the CRC.",
    options: {
      A: "one bit less than",
      B: "one bit more than",
      C: "The same size as",
      D: "none of the above",
    },
    answer: "B",
    explanation: "The divisor in a CRC calculation is always one bit longer than the number of bits in the resulting remainder (CRC).",
  },
  {
    id: 61,
    question:
      "In a single-parity check, which of the following statements is true?",
    options: {
      A: "If total number of 1's is even and even parity is used, then receiver assumes that no error occurred.",
      B: "If total number of 1's is even and odd parity is used, then receiver assumes that error occurred.",
      C: "If total number of 1's is odd and odd parity is used, then receiver assumes that no error occurred.",
      D: "If total number of 1's is odd and even parity is used, then receiver assumes that error occurred.",
      E: "All of the above",
    },
    answer: "E",
    explanation: "These are the fundamental rules for detecting single-bit errors using even or odd parity bits.",
  },
  {
    id: 62,
    question: "Reliability at the transport layer is between hosts.",
    options: {
      A: "True",
      B: "False",
    },
    answer: "B",
    explanation:
      "The transport layer provides reliability between processes on those hosts, not between the hosts themselves.",
  },
  {
    id: 63,
    question: "Bellmann Ford Algorithm is an example for ____",
    options: {
      A: "Dynamic Programming",
      B: "Greedy Algorithms",
      C: "Linear Programming",
      D: "Branch and Bound",
      E: "a and b",
    },
    answer: "A",
    explanation: "Bellman-Ford uses a dynamic programming approach by solving sub-problems (finding paths of length 1, then 2, and so on).",
  },
  {
    id: 64,
    question:
      "Which of the following statements is true about IP service model",
    options: {
      A: "It does not guarantee segment delivery",
      B: "It does not guarantee orderly delivery of segments",
      C: "It does not guarantee the integrity of the data in the segments.",
      D: "IP is an unreliable service.",
      E: "All of the above",
    },
    answer: "E",
    explanation: "IP is a best-effort, unreliable protocol that provides no guarantees regarding delivery, order, or data integrity.",
  },
  {
    id: 65,
    question: "Propagation delay depends on ____.",
    options: {
      A: "Distance between the routers",
      B: "Transmission rate",
      C: "Packet length",
      D: "Speed of the CPU",
    },
    answer: "A",
    explanation:
      "Propagation delay (d/s) is determined by the distance the signal travels and its speed through the medium.",
  },
  {
    id: 66,
    question: "In _______ systems, resources are allocated on demand.",
    options: {
      A: "packet switching",
      B: "circuit switching",
      C: "line switching",
      D: "frequency switching",
    },
    answer: "A",
    explanation: "Packet-switched systems use statistical multiplexing to allocate bandwidth on an as-needed basis, maximizing link efficiency.",
  },
  {
    id: 67,
    question:
      "For a stop-and-wait protocol, for 10 data packets sent, ____ acknowledgments are needed.",
    options: {
      A: "exactly 10",
      B: "less than 10",
      C: "more than 10",
      D: "can't actually say since it depends on the protocol mechanism being used",
      E: "None of the above",
    },
    answer: "A",
    explanation: "In a basic stop-and-wait protocol, each and every packet must be individually acknowledged before the next packet can be sent.",
  },
  {
    id: 68,
    question:
      "Which of the following best explains the primary function of the Transport Layer in the OSI model?",
    options: {
      A: "Routing packets between networks",
      B: "Providing reliable end-to-end communication",
      C: "Framing and error detection",
      D: "Logical addressing",
    },
    answer: "B",
    explanation: "The transport layer is responsible for the end-to-end delivery of messages, providing reliable data transfer and flow control.",
  },
  {
    id: 69,
    question: "The term HTTP stands for ____.",
    options: {
      A: "Hyper terminal tracing program",
      B: "Hypertext tracing protocol",
      C: "Hypertext transfer protocol",
      D: "Hypertext transfer program",
    },
    answer: "C",
    explanation: "HTTP stands for Hypertext Transfer Protocol, the protocol used for transmitting web pages over the internet.",
  },
  {
    id: 70,
    question:
      "Circuit switching is implemented in the ___ layer, whereas packet switching is implemented in the ___ layer.",
    options: {
      A: "Network; Transport",
      B: "Transport; Network",
      C: "Physical; Network",
      D: "Data Link; Network",
      E: "Presentation; Session",
    },
    answer: "C",
    explanation: "Circuit switching is historically associated with physical layer connections (dedicated lines), while packet switching is a key feature of the network layer.",
  },
];
