import React from 'react'
import SidebarLS from '../../components/dashboard/lembagasosial/SidebarLS';
import NavbarLS from '../../components/dashboard/lembagasosial/NavbarLS';

const Notif = () => {
    return (
        <div className="relative flex min-h-screen">
            <SidebarLS />
            <section className="pb-16 bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <NavbarLS />

                    <section className="min-h-screen mx-10 mt-10">


                        <div className="space-y-4">
                            {[
                                { id: 1, message: "Kampanye Anda 'Bantuan untuk Korban Banjir' telah disetujui oleh admin.", time: "2 jam yang lalu", icon: "🎉" },
                                { id: 2, message: "Anda menerima donasi sebesar Rp 500.000 untuk kampanye 'Pendidikan untuk Semua'.", time: "1 hari yang lalu", icon: "💰" },
                                { id: 3, message: "Pengajuan verifikasi akun Anda sedang dalam proses. Harap tunggu 1-3 hari kerja.", time: "3 hari yang lalu", icon: "⏳" },
                                { id: 4, message: "Kampanye 'Makanan untuk Lansia' akan berakhir dalam 2 hari. Pertimbangkan untuk memperpanjang.", time: "4 hari yang lalu", icon: "⚠️" },
                                { id: 5, message: "Selamat! Akun Anda telah berhasil diverifikasi. Anda sekarang dapat membuat kampanye.", time: "1 minggu yang lalu", icon: "✅" }
                            ].map((notif) => (
                                <div key={notif.id} className="bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start">
                                    <div className="text-2xl mr-3">{notif.icon}</div>
                                    <div>
                                        <p className="text-gray-800 text-sm">{notif.message}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>

                </div>

            </section>
        </div>

    )
}

export default Notif