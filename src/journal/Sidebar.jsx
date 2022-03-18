import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h2 className="mt-5">
                    <i className="fa fa-moon" />
                    <span> Yoni S.</span>
                </h2>

                <button className="btn">Logout</button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5 mb-5">New entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
