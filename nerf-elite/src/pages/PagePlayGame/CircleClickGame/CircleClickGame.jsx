import React, { useState, useEffect, useRef } from "react";
import "./CircleClickGame.css";
import { useNavigate } from "react-router-dom";

const CircleClickGame = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [circles, setCircles] = useState([]);
    const navigate = useNavigate();

    const scoreRef = useRef(score);
    const timerRef = useRef(null);

    const selectedWeapon = localStorage.getItem("selectedWeapon") || "Unknown";

    const circleTypes = [
        { points: 10, size: 100 },
        { points: 20, size: 80 },
        { points: 50, size: 60 },
        { points: 100, size: 40 }
    ];

    useEffect(() => {
        if (timeLeft <= 0) return;

        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    localStorage.setItem("finalScore", scoreRef.current);

                    setTimeout(() => {
                        navigate("/game-over", { state: { score: scoreRef.current, selectedWeapon } });
                    }, 500);

                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const gameInterval = setInterval(() => {
            spawnCircle();
        }, 700);

        return () => clearInterval(gameInterval);
    }, [timeLeft]);

    const spawnCircle = () => {
        const { points, size } = circleTypes[Math.floor(Math.random() * circleTypes.length)];
        const newCircle = {
            id: Math.random(),
            points,
            size,
            top: Math.random() * (window.innerHeight - size),
            left: Math.random() * (window.innerWidth - size),
            lifeTime: Math.random() * 3000 + 2000
        };

        setCircles(prev => [...prev, newCircle]);

        setTimeout(() => {
            setCircles(prev => prev.filter(circle => circle.id !== newCircle.id));
        }, newCircle.lifeTime);
    };

    const handleCircleClick = (id, points) => {
        setScore(prev => {
            const newScore = prev + points;
            scoreRef.current = newScore;
            return newScore;
        });
        setCircles(prev => prev.filter(circle => circle.id !== id));
    };

    return (
        <div className="game-container">
            <div className="headerMiniGame">
                <div className="logoViewRange"></div>
                <div className="textPlay">
                    Tap the targets to shoot as many <br />
                    as you can within the time limit!
                </div>
            </div>
            <div className="display-container">
                <div className="score-display">Score: {score}</div>
                <div className="time-display">Time: {timeLeft} sec.</div>
            </div>
            {circles.map(circle => (
                <div
                    key={circle.id}
                    onClick={() => handleCircleClick(circle.id, circle.points)}
                    className="circle"
                    style={{
                        width: `${circle.size}px`,
                        height: `${circle.size}px`,
                        top: `${circle.top}px`,
                        left: `${circle.left}px`,
                        animationDuration: `${circle.lifeTime}ms`
                    }}
                >
                    {circle.points}
                </div>
            ))}
        </div>
    );
};

export default CircleClickGame;
