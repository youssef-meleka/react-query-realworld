/* eslint-disable prettier/prettier */
import React from 'react';
import './RevisionHistory.css';

interface Revision {
    id: number;
    title: string;
    body: string;
    updated_at: string;
}

interface RevisionHistoryProps {
    revisions: Revision[];
    onRevert: (revisionId: number) => void;
    isAuthorized: boolean;
}

const RevisionHistory: React.FC<RevisionHistoryProps> = ({ revisions, onRevert, isAuthorized }) => {
    return (
        <div className="revision-history">
            <h3>Revision History</h3>
            <ul>
                {revisions.map((revision) => (
                    <li key={revision.id}>
                        <div>
                            <strong>Title:</strong> {revision.title}
                        </div>
                        <div>
                            <strong>Body:</strong> {revision.body}
                        </div>
                        <div>
                            <strong>Updated At:</strong> {new Date(revision.updated_at).toLocaleString()}
                        </div>
                        {isAuthorized && <button onClick={() => onRevert(revision.id)}>Revert</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RevisionHistory;