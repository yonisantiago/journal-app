import React from 'react'

export const JournalEntry = () => {


    return (
        <div className="journal__entry pointer">


            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/586b82209f7456a21265feec/1493042606639-QXRVWHH7VL3DF1HKSV3X/roberto-nickson-48063.jpg)'
                }}>
            </div>

            <div className="journal__entry-body">
                <h4 className="journal__entry-title">A new day</h4>
                <p className="journal__entry-content">Lorem ipsum dolor sit amet, consectetur adiempor incididunt ut l</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h5>28</h5>
            </div>
        </div>
    )
}
