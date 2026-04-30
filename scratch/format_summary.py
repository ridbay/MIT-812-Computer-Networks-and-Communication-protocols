import re

user_text = """
Data Communication and Computer Networks: Complete Revision Guide

This guide breaks down the "Data Communication and Computer Networks" lecturer book chapter by chapter. It is designed to be simple, easy to understand, and focused on what you need to know for your exams.

Chapter 1: Introduction to Computer Networks

Simple Summary

Imagine a computer network as a postal system. Just as the postal system connects people so they can send letters and packages to each other, a computer network connects computers and devices so they can share data and resources. The Internet is simply the largest postal system in the world, connecting millions of smaller networks together.

Key Concepts to Memorize

•
Network: A collection of computers, servers, mainframes, network devices, or other devices connected to one another to allow the sharing of data.

•
Host (End System): Any device connected to a network (like your laptop, smartphone, or a web server).

•
Communication Links: The physical paths that connect devices, such as copper wires, fiber-optic cables, or wireless radio waves.

•
Packet Switch: Devices like routers and switches that take a piece of data arriving on one link and forward it onto another link toward its destination.

•
Protocol: A set of rules that govern how data is transmitted and received. Think of it as a language that computers use to understand each other.

Important Models

The OSI Model vs. The TCP/IP Model
To make networks work, the tasks are divided into layers.

•
OSI Model (7 Layers): A theoretical model that explains how networks should work. The layers are Application, Presentation, Session, Transport, Network, Data Link, and Physical.

•
TCP/IP Model (4 or 5 Layers): The practical model used by the Internet today. The layers are Application, Transport, Network, Link, and Physical.

Exam Focus Areas

•
Be able to define what a protocol is and why it is necessary.

•
Understand the difference between the network edge (hosts/end systems) and the network core (routers and switches).

•
Know the layers of the TCP/IP model and what each layer generally does.

Quick Revision Checklist




I can define a computer network.




I know what hosts, links, and packet switches are.




I understand the concept of a protocol.




I can list the layers of the TCP/IP model.




Chapter 2: The Application Layer

Simple Summary

The Application Layer is the part of the network you interact with directly. When you open a web browser, send an email, or watch a video online, you are using application layer protocols. This layer provides the services that make the network useful to humans.

Key Concepts to Memorize

•
Client-Server Architecture: A setup where one central computer (the server) provides resources or services to other computers (the clients). Example: Browsing a website.

•
Peer-to-Peer (P2P) Architecture: A setup where all computers are equal and share resources directly with each other without needing a central server. Example: BitTorrent.

•
Socket: The "door" between the application and the network. Applications send messages through the socket, and the network delivers them.

•
HTTP (HyperText Transfer Protocol): The protocol used for the World Wide Web to fetch web pages.

•
DNS (Domain Name System): The "phonebook" of the Internet. It translates human-readable domain names (like www.google.com) into IP addresses that computers use.

Important Theories

How DNS Works
When you type a website address, your computer doesn't know where it is. It asks a DNS server, "What is the IP address for this name?" The DNS server looks it up and sends the IP address back. Your computer then uses that IP address to connect to the website.

Exam Focus Areas

•
Compare and contrast Client-Server and P2P architectures.

•
Explain the purpose of DNS and how it functions.

•
Understand the basic operation of HTTP (request and response messages).

Quick Revision Checklist




I can explain Client-Server vs. P2P.




I know what a socket is.




I understand what HTTP and DNS do.




Chapter 3: The Transport Layer

Simple Summary

If the Application Layer is the person writing a letter, the Transport Layer is the post office sorting facility. It takes the data from the application, breaks it into smaller pieces (called segments), and ensures it gets to the correct application on the receiving computer. It provides logical communication between processes running on different hosts.

Key Concepts to Memorize

•
Multiplexing/Demultiplexing: The process of gathering data from different applications, adding headers, and sending it out (multiplexing), and then delivering received data to the correct application based on port numbers (demultiplexing).

•
UDP (User Datagram Protocol): A fast, simple, but unreliable protocol. It sends data and hopes it gets there, but doesn't check. Used for streaming video or online gaming where speed is more important than perfect accuracy.

•
TCP (Transmission Control Protocol): A reliable, connection-oriented protocol. It guarantees that data will arrive intact and in order. Used for web browsing, email, and file transfers.

•
Port Numbers: Numbers used to identify specific applications on a computer (e.g., Port 80 for HTTP).

Important Models

TCP 3-Way Handshake
Before TCP sends any data, it establishes a connection to ensure both sides are ready.

1.
SYN: Client sends a "Synchronize" message to the server.

2.
SYN-ACK: Server replies with a "Synchronize-Acknowledge" message.

3.
ACK: Client sends an "Acknowledge" message back. The connection is now open.

Exam Focus Areas

•
The key differences between TCP and UDP (Reliability vs. Speed).

•
How multiplexing and demultiplexing work using port numbers.

•
The steps of the TCP 3-way handshake.

•
Principles of Reliable Data Transfer (rdt) and how TCP handles lost packets (retransmissions).

Quick Revision Checklist




I can compare TCP and UDP.




I understand port numbers and multiplexing.




I can explain the TCP 3-way handshake.




Chapter 4: The Network Layer

Simple Summary

The Network Layer is like the GPS navigation system for the Internet. Its main job is to figure out the best path for data to travel from the source computer to the destination computer, often passing through many different networks and routers along the way.

Key Concepts to Memorize

•
Forwarding (Data Plane): The local action of a router taking a packet arriving on one input link and moving it to the correct output link.

•
Routing (Control Plane): The network-wide process that determines the end-to-end path that packets take from source to destination.

•
IP Address: A unique numerical label assigned to every device connected to a computer network.

•
IPv4 vs. IPv6: IPv4 uses 32-bit addresses (running out of space). IPv6 uses 128-bit addresses (plenty of space for the future).

Important Theories

Routing Algorithms
Routers use algorithms to calculate the best path.

•
Distance Vector: Routers share their knowledge of the entire network only with their immediate neighbors.

•
Link State: Every router shares its knowledge of its immediate neighbors with the entire network, allowing every router to build a complete map of the network.

Exam Focus Areas

•
The difference between forwarding and routing.

•
The structure of an IP address and the difference between IPv4 and IPv6.

•
The basic concepts of Distance Vector and Link State routing algorithms.

Quick Revision Checklist




I know the difference between forwarding and routing.




I understand what an IP address is.




I can briefly explain how routing algorithms work.




Chapter 5: The Link Layer

Simple Summary

The Link Layer is responsible for moving data across a single physical link between two directly connected devices (like your computer and your home Wi-Fi router). If the Network Layer plans the whole trip, the Link Layer handles the specific transportation method for each leg of the journey (e.g., taking a car to the airport, then a plane, then a train).

Key Concepts to Memorize

•
Node: Any device that runs a link-layer protocol (hosts, routers, switches, Wi-Fi access points).

•
Link: The communication channel that connects adjacent nodes.

•
Frame: The package of data at the link layer. The link layer takes a datagram from the network layer and encapsulates it into a frame.

•
MAC Address (Media Access Control): A unique physical address assigned to a network interface card (NIC) by the manufacturer. It is permanent, unlike an IP address which can change.

Important Theories

Error Detection and Correction
Because physical links can be noisy, bits can get flipped (a 0 becomes a 1). The link layer uses techniques to detect this.

•
Parity Checks: Adding an extra bit to make the total number of 1s even or odd.

•
Checksumming: Adding up the data and sending the sum. The receiver does the same math to check if the sums match.

•
Cyclic Redundancy Check (CRC): A more complex mathematical division method used widely in practice for highly accurate error detection.

Exam Focus Areas

•
The services provided by the link layer (framing, link access, error detection).

•
The difference between a MAC address (physical, permanent) and an IP address (logical, changeable).

•
How basic error detection methods like parity checks and CRC work.

Quick Revision Checklist




I understand the role of the link layer in moving data between adjacent nodes.




I know the difference between a MAC address and an IP address.




I can explain why error detection is necessary and name one method.




Final Crash Revision Guide

This is your last-minute checklist before the exam. If you understand these core concepts, you are in good shape!

1. The Big Picture: The Protocol Stack

Understand how data moves down the stack on the sender's side and up the stack on the receiver's side.

•
Application Layer: Creates the message (HTTP, DNS).

•
Transport Layer: Breaks message into segments, adds port numbers (TCP, UDP).

•
Network Layer: Puts segments into datagrams, adds IP addresses, handles routing (IP).

•
Link Layer: Puts datagrams into frames, adds MAC addresses, moves data across a single link (Ethernet, Wi-Fi).

•
Physical Layer: Transmits the raw bits (0s and 1s) over the wire or air.

2. Key Comparisons to Memorize

Feature
TCP
UDP
Connection
Connection-oriented (3-way handshake)
Connectionless
Reliability
Reliable (guarantees delivery)
Unreliable (best effort)
Speed
Slower (due to overhead)
Faster
Use Cases
Web browsing, Email, File transfer
Streaming video, VoIP, Gaming




Feature
IP Address
MAC Address
Layer
Network Layer (Layer 3)
Link Layer (Layer 2)
Format
32-bit (IPv4) or 128-bit (IPv6)
48-bit (Hexadecimal)
Permanence
Changes based on network location
Permanent (burned into hardware)
Purpose
End-to-end routing across the Internet
Node-to-node delivery on a single link




3. Crucial Mechanisms

•
DNS: Translates names (www.example.com) to IP addresses.

•
Routing vs. Forwarding: Routing is the map-making (control plane); Forwarding is following the map at each intersection (data plane).

•
Error Detection: Link layer uses CRC or parity to ensure the 0s and 1s didn't get corrupted while traveling over the physical wire.

Good luck with your exam! Focus on understanding the "why" behind these concepts, and the details will be much easier to remember.
"""

# Let's process the text programmatically to conform to the required syntax
lines = user_text.split('\n')
out_lines = []

i = 0
in_checklist = False
while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    
    if line.startswith("Data Communication and Computer Networks: Complete Revision Guide"):
        out_lines.append("## Complete Revision Guide: Overview")
    elif line == 'This guide breaks down the "Data Communication and Computer Networks" lecturer book chapter by chapter. It is designed to be simple, easy to understand, and focused on what you need to know for your exams.':
        out_lines.append(line)
    elif line.startswith("Chapter ") and ":" in line:
        out_lines.append("\n## " + line + " (Simplified)")
    elif line == "Final Crash Revision Guide":
        out_lines.append("\n## Final Crash Revision Guide (Simplified)")
    elif line in ["Simple Summary", "Key Concepts to Memorize", "Important Models", "Exam Focus Areas", "Quick Revision Checklist", "Important Theories"]:
        out_lines.append(f"### {line}")
        if line == "Quick Revision Checklist":
            in_checklist = True
        else:
            in_checklist = False
    elif line == "•":
        # Bullet point, get next non-empty line
        i += 1
        while i < len(lines) and not lines[i].strip():
            i += 1
        if i < len(lines):
            # If the bullet item contains a colon, make the first part bold
            content = lines[i].strip()
            if ":" in content:
                parts = content.split(":", 1)
                content = f"**{parts[0].strip()}:** {parts[1].strip()}"
            out_lines.append(f"- {content}")
    elif line.startswith("1.") or line.startswith("2.") or line.startswith("3."):
        # Numbers inside TCP 3-way handshake or crash guide
        if "SYN" in line or "ACK" in line or "Big Picture" in line or "Key Comparisons" in line or "Crucial Mechanisms" in line:
             out_lines.append(f"### {line}")
        else:
            out_lines.append(line)
    elif in_checklist and line.startswith("I "):
        out_lines.append(f"- [ ] {line}")
    elif "Feature" in line and "TCP" in line and "UDP" in line:
        out_lines.append("```text\nFeature | TCP | UDP\nConnection | Connection-oriented | Connectionless\nReliability | Reliable | Unreliable\nSpeed | Slower | Faster\nUse Cases | Web | Streaming\n```")
        # skip table lines
        while i < len(lines) and "Use Cases" not in lines[i]:
            i+=1
    elif "Feature" in line and "IP Address" in line and "MAC Address" in line:
        out_lines.append("```text\nFeature | IP Address | MAC Address\nLayer | Network Layer | Link Layer\nFormat | 32-bit/128-bit | 48-bit\nPermanence | Changes | Permanent\nPurpose | End-to-end | Node-to-node\n```")
        while i < len(lines) and "Purpose" not in lines[i]:
            i+=1
    elif line in ["Feature", "TCP", "UDP", "Connection", "Connection-oriented (3-way handshake)", "Connectionless", "Reliability", "Reliable (guarantees delivery)", "Unreliable (best effort)", "Speed", "Slower (due to overhead)", "Faster", "Use Cases", "Web browsing, Email, File transfer", "Streaming video, VoIP, Gaming"]:
        pass
    elif line in ["IP Address", "MAC Address", "Layer", "Network Layer (Layer 3)", "Link Layer (Layer 2)", "Format", "32-bit (IPv4) or 128-bit (IPv6)", "48-bit (Hexadecimal)", "Permanence", "Changes based on network location", "Permanent (burned into hardware)", "Purpose", "End-to-end routing across the Internet", "Node-to-node delivery on a single link"]:
        pass
    else:
        out_lines.append(line)
    i += 1

markdown_text = "\n\n".join(out_lines)
with open("scratch/formatted_user_summary.md", "w") as f:
    f.write(markdown_text)
