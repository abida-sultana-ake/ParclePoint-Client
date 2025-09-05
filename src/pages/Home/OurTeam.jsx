import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Leroy Jenkins",
    role: "Web Developer",
    img: "https://i.pinimg.com/1200x/21/be/10/21be10df58569bdd5598207d9c1a4543.jpg",
    email: "leroy@example.com",
    phone: "+1234567890",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Jane Doe",
    role: "UI/UX Designer",
    img: "https://i.pinimg.com/736x/62/85/7b/62857b21327da63c6ea4d5379f6621ab.jpg",
    email: "jane@example.com",
    phone: "+1234567891",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "John Smith",
    role: "Backend Developer",
    img: "https://i.pinimg.com/736x/0d/bc/a7/0dbca7e372766da7842528c87f693c01.jpg",
    email: "john@example.com",
    phone: "+1234567892",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Alice Johnson",
    role: "Project Manager",
    img: "https://i.pinimg.com/736x/5d/98/d5/5d98d5f7bc3a2d3a4455aad28e4c15f2.jpg",
    email: "alice@example.com",
    phone: "+1234567893",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
];

const OurTeam = () => {
  return (
    <section className="relative py-12 overflow-hidden text-emerald-900">
      <div className="container p-4 mx-auto space-y-16 sm:p-10">
        {/* Heading */}
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold leading-none sm:text-5xl text-emerald-600">
            Meet Our Team
          </h3>
          <p className="max-w-2xl mx-auto text-emerald-700">
            Our talented team of professionals is dedicated to delivering the
            best solutions for our clients.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center p-4 rounded-xl shadow-lg cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.08 }}
            >
              {/* Gradient Overlay on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
              ></motion.div>

              <motion.img
                src={member.img}
                alt={member.name}
                className="object-cover h-56 w-56 rounded-lg border-2 border-emerald-300 z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10 flex flex-col items-center mt-4 space-y-2">
                <h4 className="text-xl font-semibold text-emerald-800">
                  {member.name}
                </h4>
                <p className="text-emerald-600">{member.role}</p>
                <p className="text-emerald-700 text-sm">{member.email}</p>
                <p className="text-emerald-700 text-sm">{member.phone}</p>
                <div className="flex space-x-3 mt-2">
                  {Object.entries(member.social).map(([key, link]) => (
                    <motion.a
                      key={key}
                      href={link}
                      title={key}
                      className="text-emerald-600 hover:text-emerald-900 text-lg"
                      whileHover={{ scale: 1.3, y: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <i className={`fab fa-${key}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;