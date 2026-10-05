const games = [
    {
        name: 'Night Prowler',
        description: 'Coming soon.',
    },
    {
        name: 'Symblobs',
        description: 'Coming soon.',
    },
];

export const Games = () => {
    return (
        <section id="games" className="scroll-mt-16 py-24 bg-bg-dark">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="font-tech text-6xl tracking-tight text-ice">Games</h2>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {games.map((game) => (
                        <div
                            key={game.name}
                            className="border border-border rounded-md overflow-hidden hover:border-periwinkle transition-colors"
                        >
                            <div className="aspect-video bg-indigo-800" />
                            <div className="p-6">
                                <h3 className="font-tech text-xl text-ice">{game.name}</h3>
                                <p className="font-body text-muted mt-2">{game.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};