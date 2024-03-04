import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                    <p className="mt-6 text-lg font-medium text-gray-900">+1-316-555-0116</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">+1-446-526-0117</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-6 text-lg font-medium text-gray-900">contact@example.com</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">hr@example.com</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">8502 Preston Rd. Ingle, Maine 98380, USA</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;