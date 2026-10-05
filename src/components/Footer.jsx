const socials = [
    { name: 'GitHub', url: 'https://github.com/CandleByte' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Discord', url: '#' },
];

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-border bg-bg-dark">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6 text-center">

                <img src="/candlebyte.png" alt="CandleByte Interactive" className="w-12" />

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="font-tech text-sm uppercase tracking-wider text-muted hover:text-ice transition-colors"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>

                <p className="font-body text-sm text-muted">
                    © {new Date().getFullYear()} CandleByte Interactive. All rights reserved.
                </p>

            </div>
        </footer>
    );
};