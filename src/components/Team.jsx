const team = [
    {
        name: 'Burak',
        role: 'Game Dev',
        image: '/pictures/genericmalevampire.png',
    },
    {
        name: 'Mete',
        role: 'Game Dev',
        image: '/pictures/genericmalevampire.png',
    },
    {
        name: 'Bilge',
        role: 'Designer',
        image: '/pictures/genericfemalevampire.png',
    },
    {
        name: 'Nurşah',
        role: 'Writer',
        image: '/pictures/genericfemalevampire.png',
    },
    {
        name: 'Gülfem',
        role: 'Developer',
        image: '/pictures/genericfemalevampire.png',
    },
];

export const Team = () => {
    return (
        <section id="team" className="scroll-mt-16 py-24 bg-bg-dark">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="font-tech text-4xl tracking-tight text-ice">Team</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="border border-border rounded-md overflow-hidden hover:border-periwinkle transition-colors"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full aspect-square object-cover bg-surface"
                            />
                            <div className="p-4 text-center">
                                <h3 className="font-tech text-base text-ice">{member.name}</h3>
                                <p className="font-body text-sm text-muted mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};