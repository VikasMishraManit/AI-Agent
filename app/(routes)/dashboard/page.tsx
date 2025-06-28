import React from 'react';
import HistoryList from './_components/HistoryList';
import { Button } from '@/components/ui/button';
import DoctorsAgentList from './_components/DoctorsAgentList';

function Dashboard() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-blue-900">My Health Dashboard</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + Consult with Doctor
        </Button>
      </div>

      {/* Consultation History Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Consultations</h3>
        <HistoryList />
      </section>

      {/* AI Doctor Agents Section */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">AI Specialist Doctors</h3>
        <DoctorsAgentList />
      </section>
    </div>
  );
}

export default Dashboard;
