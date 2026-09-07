import React from 'react';
import vegitableImg from '../assets/vegetables.webp';
import healthyGrocery from '../assets/healthyGrocery.webp';
import budgetFriendly from '../assets/budgetFriendly.jpg';
import organic from '../assets/organic-vs-conventional-fruits-vegetables-comparison.webp';
import quick from '../assets/OSK.jpg';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "Fresh Tips to Store Vegetables Longer",
            desc: "Keep your veggies fresh for days with these simple storage hacks.",
            img: vegitableImg,
        },
        {
            id: 2,
            title: "Healthy Grocery Shopping Guide",
            desc: "Choose the best and healthiest items for your daily meals.",
            img: healthyGrocery,
        },
        {
            id: 3,
            title: "Top 10 Fruits You Should Eat Daily",
            desc: "Boost your health with these essential fruits.",
            img: healthyGrocery
        },
        {
            id: 4,
            title: "Budget-Friendly Grocery Tips",
            desc: "Save money while shopping without compromising quality.",
            img: budgetFriendly,
        },
        {
            id: 5,
            title: "Organic vs Regular: What to Choose?",
            desc: "Understand the difference and make smarter choices.",
            img: organic,
        },
        {
            id: 6,
            title: "Quick Meal Ideas from Groceries",
            desc: "Turn your groceries into delicious meals in minutes.",
            img: quick,
        },
    ];

    return (
        <div className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Grocery Hub Blog
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Tips, guides, and ideas to make your grocery shopping smarter and healthier.
                    </p>
                </div>
                <div className="bg-gray-100 py-10 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Blog Section */}
                        <div className="lg:col-span-2 space-y-8">
                            {posts.map((post) => (
                                <div key={post.id} className="bg-white rounded-xl shadow overflow-hidden">
                                    <img src={post.img} alt={post.title} className="w-full h-72 object-cover" />

                                    <div className="p-6">
                                        <p className="text-sm text-gray-400 mb-2">May 3, 2024 • Grocery</p>

                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 mb-4">{post.desc}</p>

                                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
