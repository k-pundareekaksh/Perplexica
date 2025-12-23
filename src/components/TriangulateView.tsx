import React from 'react';

interface TriangulationResult {
    summary: string;
    consensus: string[];
    disagreements: string[];
    sources: { title: string; url: string }[];
}

const TriangulateView = ({ data }: { data: TriangulationResult | null }) => {
    if (!data) return null;

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-lg bg-light-primary dark:bg-dark-primary border-light-200 dark:border-dark-200">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Triangulation Report</h3>
                <p className="text-sm dark:text-gray-300">{data.summary}</p>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-green-600 dark:text-green-400">
                    Consensus
                </h4>
                {data.consensus.length > 0 ? (
                    <ul className="list-disc list-inside text-sm">
                        {data.consensus.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">No consensus points found.</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-red-600 dark:text-red-400">
                    Disagreements
                </h4>
                {data.disagreements.length > 0 ? (
                    <ul className="list-disc list-inside text-sm">
                        {data.disagreements.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">No disagreements found.</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Sources
                </h4>
                <ul className="list-disc list-inside text-sm">
                    {data.sources.map((source, i) => (
                        <li key={i}>
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {source.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TriangulateView;
