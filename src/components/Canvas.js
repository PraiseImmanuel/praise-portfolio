import "../styles/Canvas.css";
import React, { useEffect, useState } from "react";

// Canvas Component
const Canvas = () => {
    //state for getting device width in case of change of orientation
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    useEffect(() => {
        const getScreenSize = () => {
            setHeight(document.querySelector(".home-container").offsetHeight);
            setWidth(document.querySelector(".home-container").offsetWidth);
        };
        getScreenSize();

        window.addEventListener("resize", getScreenSize);

        return () => {
            window.removeEventListener("resize", getScreenSize);
        };
    }, [height, width]);

    //adding ref to canvas
    const canvas = React.useRef();
    useEffect(() => {
        const context = canvas.current.getContext("2d");
        MouseTrail(context, canvas);
    });
    return (
        <canvas className="canvas" ref={canvas} height={height} width={width} />
    );
};

//canva animation
const MouseTrail = (context, canvas) => {
    const spots = [];
    const hue = [0];

    const mouse = {
        x: undefined,
        y: undefined,
    };

    canvas.current.addEventListener("mousemove", (event) => {
        mouse.x = event.x + 20;
        mouse.y = event.y;
        for (let i = 0; i < 3; i++) {
            spots.push(new Particle());
        }
    });

    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 3 + 0.1;
            this.speedX = Math.random() * 3 - 1;
            this.speedY = Math.random() * 3 - 1;
            this.color = "hsl(" + hue[0] + ", 100%, 50%)";
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.1) this.size -= 0.03;
        }

        draw() {
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            context.fill();
        }
    }

    const handleParticle = () => {
        for (let i = 0; i < spots.length; i++) {
            spots[i].update();
            spots[i].draw();
            for (let j = i; j < spots.length; j++) {
                const dx = spots[i].x - spots[j].x;
                const dy = spots[i].y - spots[j].y;
                const distance = Math.sqrt(dx * dx * dy);
                if (distance < 90) {
                    context.beginPath();
                    context.strokeStyle = spots[i].color;
                    context.lineWidth = spots[i] / 10;
                    context.moveTo(spots[i].x, spots[i].y);
                    context.lineTo(spots[i].x, spots[i].y);
                    context.stroke();
                }
            }

            if (spots[i].size <= 0.3) {
                spots.splice(i, 1);
                i--;
            }
        }
    };

    const animate = () => {
        context.clearRect(0, 0, canvas.current.width, canvas.current.height);
        handleParticle();
        hue[0]++;
        requestAnimationFrame(animate);
    };

    document.addEventListener("mouseout", () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    animate();
};

export default Canvas;
