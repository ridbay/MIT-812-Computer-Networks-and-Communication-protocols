import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileEdit, BookOpen, ChevronDown, ChevronUp, Search, Info } from "lucide-react";

interface QuestionItem {
  question: string;
  answer: string;
}

interface AssignmentSet {
  id: number;
  title: string;
  items: QuestionItem[];
}

const Assignment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});

  const assignmentSets: AssignmentSet[] = [
    {
      id: 1,
      title: "Set 1: Network Edge and Core",
      items: [
        {
          question: "What is the difference between a host and an end system? List several different types of end systems. Is a Web server an end system?",
          answer: "In the context of computer networking, there is **no fundamental difference** between a host and an end system; the two terms are used interchangeably. Both refer to devices that are located at the **\"edge\"** of the network and run application-level programs (like a web browser or a mail client). \n\n**Examples of end systems** include: \n- Traditional devices: PCs, workstations, and laptops. \n- Mobile devices: Smartphones and tablets. \n- Specialized servers: Web servers and mail servers. \n- IoT devices: IP cameras, smart thermostats, and home appliances. \n\n**Yes, a Web server is an end system**, as it resides at the edge of the network and provides services to clients."
        },
        {
          question: "How does Wikipedia describe diplomatic protocol?",
          answer: "Wikipedia describes **diplomatic protocol** as a system of international courtesy rules that facilitate nations and people living and working together. \n\nKey functions include: \n- **Etiquette**: Providing a structured way for diplomats to interact. \n- **Mutual Respect**: Ensuring that relationships between nations are conducted with order and decorum. \n- **Conflict Avoidance**: Reducing friction by establishing clear expectations for behavior during official events and negotiations."
        },
        {
          question: "Why are standards important for protocols?",
          answer: "**Standards** are critical because they ensure **interoperability** between hardware and software developed by different vendors. \n\nWithout global standards (like those defined by the **IETF** in RFCs), the Internet would be a collection of isolated islands. Standards allow a router from Cisco to communicate perfectly with a server from Dell using an operating system from Microsoft. This uniformity is what allows the Internet to scale into a cohesive global network."
        },
        {
          question: "One packet switch exists between a sending and receiving host. Transmission rates are R1 and R2. Using store-and-forward switching, what is the total end-to-end delay for a packet of length L? (Ignore queuing, propagation, and processing delay.)",
          answer: "In a **store-and-forward** system, the switch must receive the **entire packet** before it can begin transmitting it on the next link. \n\n1. **Step 1**: Time for the host to transmit the packet to the switch = **L/R1**. \n2. **Step 2**: Time for the switch to transmit the packet to the destination = **L/R2**. \n\n**Total End-to-End Delay = (L/R1) + (L/R2)**. \n\nNote: If there were 'N' such switches with identical rates 'R', the formula would be **(N+1) * (L/R)**."
        },
        {
          question: "What advantage does a circuit-switched network have over a packet-switched network?",
          answer: "The primary advantage of **circuit switching** is **guaranteed performance**. \n\nBy reserving a dedicated end-to-end circuit (using either FDM or TDM), the network provides: \n- **Constant Bandwidth**: No sharing with other users. \n- **Zero Queuing Delay**: Since the path is reserved, packets don't wait in buffers. \n- **Predictable Quality**: This makes it ideal for real-time applications like traditional landline telephone calls, where jitter and delay must be minimized."
        },
        {
          question: "Why do same-level ISPs peer? How does an IXP earn money?",
          answer: "**Peering** allows ISPs at the same level of the hierarchy to exchange traffic directly without paying a higher-tier (provider) ISP for transit. This **reduces costs** and often improves performance by lowering latency. \n\nAn **Internet Exchange Point (IXP)** is a third-party organization that provides the physical infrastructure for this peering. They earn money by charging members: \n- **Port Fees**: For connecting to the exchange's switches. \n- **Colocation Fees**: For housing equipment in the IXP facility. \n- **Maintenance & Power**: Ongoing operational costs."
        }
      ]
    },
    {
      id: 2,
      title: "Set 2: Application Layer",
      items: [
        {
          question: "Network architecture vs. Application architecture?",
          answer: "**Network Architecture** refers to the fixed, physical and logical organization of communication into layers (e.g., the 5-layer **TCP/IP stack**). It is the infrastructure provided to the application. \n\n**Application Architecture**, on the other hand, is designed by the application developer and dictates how the application is structured across various end systems. The two main types are **Client-Server** (centralized) and **Peer-to-Peer (P2P)** (decentralized)."
        },
        {
          question: "Which process is the client and which is the server?",
          answer: "The distinction is based on who initiates the communication: \n- **Client**: The process that **initiates** the session by contacting the other entity. \n- **Server**: The process that sits in a **waiting state**, listening for incoming requests from clients."
        },
        {
          question: "How is a process identified?",
          answer: "To receive a message, a process must have an **identifier**. This identifier consists of two parts: \n1. **IP Address**: Identifies the host machine on which the process is running. \n2. **Port Number**: Identifies the specific socket/process on that host (e.g., port 80 for HTTP, port 25 for SMTP)."
        },
        {
          question: "Transport service classes and UDP/TCP support?",
          answer: "Applications have different requirements from the transport layer: \n- **Reliable Data Transfer**: **TCP** provides it (via ACKs and retransmissions); **UDP** does not. \n- **Throughput**: Neither TCP nor UDP provides a minimum throughput guarantee. \n- **Timing**: Neither protocol provides a guarantee on maximum delay. \n- **Security**: Standard TCP/UDP are insecure, but **TLS** (Transport Layer Security) can be added to TCP to provide encryption and integrity."
        },
        {
          question: "What is a handshaking protocol?",
          answer: "A **handshaking protocol** is a process where two or more entities exchange **control messages** to synchronize their state before actual data transfer begins. \n\nFor example, **TCP's 3-way handshake** (SYN, SYN-ACK, ACK) ensures that both the sender and receiver are ready to communicate and have agreed upon initial sequence numbers."
        },
        {
          question: "Why do HTTP, SMTP, and POP3 use TCP?",
          answer: "These protocols are used for **data-critical** applications (Web, Email) where any data loss could result in corrupted files or missing messages. They require **Reliable Data Transfer**, which ensures that all data is delivered in the correct order. Since **TCP** provides this guarantee and **UDP** does not, they are built on top of TCP."
        }
      ]
    },
    {
      id: 3,
      title: "Set 3: Transport Layer (Part 1)",
      items: [
        {
          question: "If A -> B has source port x and dest port y, what are the ports for B -> A?",
          answer: "The ports are simply **swapped** for the return traffic: \n- **Source Port**: y \n- **Destination Port**: x \n\nThis allow the original sender (A) to identify which socket the returning data belongs to."
        },
        {
          question: "Why choose UDP over TCP?",
          answer: "Developers choose **UDP** when speed is more important than perfect reliability. \n\n**Advantages of UDP**: \n- **No Connection Setup**: Faster start-up (no 3-way handshake). \n- **No Congestion Control**: The application can send data as fast as it wants without being throttled by the network state. \n- **Smaller Header**: Less overhead (8 bytes vs 20 bytes for TCP). \n\nCommonly used for **DNS**, **VoIP**, and **Online Gaming**."
        },
        {
          question: "Why use sequence numbers?",
          answer: "**Sequence numbers** are essential in a reliable data transfer protocol to handle the **stop-and-wait** problem. Specifically, they allow the receiver to distinguish between a **new packet** and a **retransmitted duplicate** of a previous packet (which might happen if an ACK was lost or delayed)."
        },
        {
          question: "Why use timers?",
          answer: "**Timers** are used to detect and recover from **packet loss**. If the sender doesn't receive an acknowledgment for a packet within a certain timeframe (the timeout period), it assumes the packet was lost in the network and **retransmits** it."
        }
      ]
    },
    {
      id: 4,
      title: "Set 4: Transport Layer (Part 2)",
      items: [
        {
          question: "Is a timer necessary in rdt 3.0 if RTT is constant and known?",
          answer: "**Yes**, a timer is still necessary. Even if you know exactly when an ACK *should* arrive, if a packet or its ACK is lost, the sender will wait forever without a timer. The timer is the mechanism that **breaks the deadlock** and triggers a recovery (retransmission) when the expected event (the ACK) fails to occur."
        },
        {
          question: "Go-Back-N (GBN) Scenarios: Kill packet 0, Kill ACK 0, Sending six packets?",
          answer: "- **Kill Packet 0**: The receiver will discard all subsequent packets (1, 2, 3...) because they are out of order. It only sends ACKs for the last correctly received in-order packet. \n- **Kill ACK 0**: If subsequent ACKs (e.g., ACK 1) arrive, ACK 0 becomes irrelevant because GBN uses **cumulative ACKs**. ACK 1 implies that everything up to 1 was received. \n- **Sending 6 Packets**: If the window size is smaller than 6, the sender will send only up to the window limit and stop, waiting for an ACK to slide the window forward before sending the rest."
        },
        {
          question: "Selective Repeat (SR) vs. GBN?",
          answer: "- **GBN (Go-Back-N)**: The receiver only accepts in-order packets. If one is lost, the sender eventually times out and **retransmits the entire window** of unacknowledged packets. \n- **SR (Selective Repeat)**: The receiver **buffers** out-of-order packets and acknowledges them individually. The sender only retransmits the **specific lost packet**, making it much more efficient in networks with high error rates."
        },
        {
          question: "Does a matching checksum guarantee no errors?",
          answer: "**No**. A checksum is a relatively simple sum-based check. It is possible for multiple bit errors to occur in such a way that they **cancel each other out**, resulting in the same final sum. While it detects most random errors, it is not foolproof."
        }
      ]
    },
    {
      id: 5,
      title: "Set 5: Network Layer",
      items: [
        {
          question: "Network-layer packet name? Router vs. Switch?",
          answer: "- **Packet Name**: A network-layer packet is called a **Datagram**. \n- **Router**: Operates at the network layer (**Layer 3**) and uses IP addresses to move data across different networks. \n- **Switch**: Operates at the data link layer (**Layer 2**) and uses MAC addresses to move data within a single local network."
        },
        {
          question: "Routing vs. Forwarding?",
          answer: "- **Forwarding**: The **local** process of moving a packet from a router's input port to the appropriate output port based on the forwarding table. (Think of it as choosing the right door at an intersection). \n- **Routing**: The **network-wide** process of determining the end-to-end path that packets take from source to destination. (Think of it as planning the entire trip on a map)."
        },
        {
          question: "Compare and contrast centralized and distributed routing.",
          answer: "- **Centralized (SDN approach)**: A single logically centralized controller calculates the paths and downloads forwarding tables to all routers. It has a **global view** of the network, making optimization easier but creating a potential single point of failure. \n- **Distributed (Traditional approach)**: Every router runs a routing algorithm and exchanges information with its neighbors. No single node has the full map. This is **more resilient** and is how protocols like OSPF and BGP function on the Internet today."
        },
        {
          question: "Link-State (LS) vs. Distance-Vector (DV)?",
          answer: "- **Link-State (e.g., Dijkstra's)**: Requires every node to have a complete map of the network topology. It is **faster to converge** but has higher communication overhead because all link changes must be broadcast to all routers. \n- **Distance-Vector (e.g., Bellman-Ford)**: Nodes only know the distance to their neighbors and which neighbor to go through for a destination. It is **computationally simpler** but slower to converge and can suffer from the **'count-to-infinity'** problem."
        }
      ]
    }
  ];

  const toggleExpand = (setIdx: number, itemIdx: number) => {
    const key = `${setIdx}-${itemIdx}`;
    setExpandedKeys(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="assignment-container" style={{ color: "white", paddingBottom: "100px" }}>
      <header style={{ marginBottom: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.5rem" }}
        >
          <FileEdit color="var(--primary)" size={28} />
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800 }}>Assignment Solutions</h1>
        </motion.div>
        <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>Master Computer Networks through stacked sets and verified solutions.</p>
      </header>

      {/* Search bar */}
      <div style={{ position: "sticky", top: "10px", zIndex: 10, marginBottom: "3rem" }}>
        <input 
          type="text" 
          placeholder="Search across all sets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "1.2rem 1.2rem 1.2rem 3.5rem",
            background: "rgba(10, 10, 10, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "18px",
            color: "white",
            fontSize: "1.05rem",
            outline: "none",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        />
        <Search style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", opacity: 0.4 }} size={20} />
      </div>

      {/* Stacked Sets List */}
      <div style={{ display: "grid", gap: "4rem" }}>
        {assignmentSets.map((set, setIdx) => {
          const filteredItems = set.items.filter(item => 
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (searchTerm && filteredItems.length === 0) return null;

          return (
            <motion.section 
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ 
                fontSize: "1.5rem", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <div style={{ width: "20px", height: "4px", background: "var(--primary)", borderRadius: "2px" }} />
                {set.title}
              </h2>

              <div style={{ display: "grid", gap: "1rem" }}>
                {filteredItems.map((item, itemIdx) => {
                  const isExpanded = expandedKeys[`${setIdx}-${itemIdx}`];
                  return (
                    <div
                      key={itemIdx}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "20px",
                        overflow: "hidden"
                      }}
                    >
                      <div 
                        onClick={() => toggleExpand(setIdx, itemIdx)}
                        style={{ 
                          padding: "1.5rem", 
                          cursor: "pointer", 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          gap: "1.5rem"
                        }}
                      >
                        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                          <div style={{ 
                            marginTop: "3px",
                            padding: "4px", 
                            background: "rgba(240, 10, 4, 0.1)", 
                            borderRadius: "8px", 
                            color: "var(--primary)" 
                          }}>
                            <BookOpen size={16} />
                          </div>
                          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 }}>{item.question}</h3>
                        </div>
                        {isExpanded ? <ChevronUp opacity={0.5} /> : <ChevronDown opacity={0.5} />}
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <div style={{ 
                              padding: "0 1.5rem 1.5rem 4rem", 
                              color: "rgba(255,255,255,0.7)",
                              lineHeight: 1.6,
                              fontSize: "1rem",
                              borderTop: "1px solid rgba(255,255,255,0.05)",
                              paddingTop: "1.5rem"
                            }}>
                              <div style={{ display: "flex", gap: "10px", color: "var(--primary)", fontWeight: 700, marginBottom: "0.8rem", fontSize: "0.85rem", textTransform: "uppercase" }}>
                                  <Info size={14} /> Solution
                              </div>
                              <div style={{ whiteSpace: "pre-wrap" }}>
                                {(() => {
                                  const text = item.answer;
                                  const parts = text.split(/(\*\*.*?\*\*)/g);
                                  return parts.map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                      return <strong key={i} style={{ color: "white", fontWeight: 800 }}>{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                  });
                                })()}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment;
