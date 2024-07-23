import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DogLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Doggy Paradise</h1>
        <p className="text-xl text-gray-600">Discover the joy of man's best friend</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Loyal Companions</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Dog loyalty" className="mx-auto object-cover w-full h-48 mb-4" />
            <p>Dogs are known for their unwavering loyalty and affection towards their human families.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Diverse Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Different dog breeds" className="mx-auto object-cover w-full h-48 mb-4" />
            <p>From tiny Chihuahuas to giant Great Danes, there's a dog breed for every preference and lifestyle.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Dog and human exercising" className="mx-auto object-cover w-full h-48 mb-4" />
            <p>Owning a dog can lead to improved physical health and reduced stress levels for their human companions.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose a Dog?</h2>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
          <li>Unconditional love and companionship</li>
          <li>Encourages an active lifestyle</li>
          <li>Provides security and protection</li>
          <li>Helps reduce stress and anxiety</li>
          <li>Teaches responsibility to children</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Find Your Perfect Companion?</h2>
        <Button size="lg">Adopt a Dog Today</Button>
      </section>
    </div>
  );
};

export default DogLandingPage;