"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
// 游戏配置
const config = {
    gameName: "星际暖光跑酷",
    version: "1.0.0",
    screenWidth: 1334,
    screenHeight: 750,
    maxFps: 60,
    targetPlatforms: ["Android", "iOS", "Web"]
};
// 角色数据
const characters = [
    {
        id: "star_hunter",
        name: "星尘猎手",
        description: "勇敢的小机器人探险家",
        skill: "加速强化 - 长按加速持续时间+30%",
        unlocked: true
    },
    {
        id: "time_messenger",
        name: "时空信使",
        description: "神秘优雅的外星访客",
        skill: "技能优化 - 瞬移冷却时间-20%",
        unlocked: false
    },
    {
        id: "sky_walker",
        name: "天际行者",
        description: "可靠的太空探险家",
        skill: "跳跃强化 - 跳跃高度+50%，支持二段跳",
        unlocked: false
    }
];
// 游戏管理器类
class GameManager {
    constructor() {
        this.currentLevel = 1;
        this.score = 0;
        this.lives = 6;
        this.selectedCharacter = "star_hunter";
    }
    startGame() {
        console.log(`🚀 开始游戏: ${config.gameName} v${config.version}`);
        console.log(`📱 屏幕尺寸: ${config.screenWidth} x ${config.screenHeight}`);
        console.log(`🎯 目标帧率: ${config.maxFps} FPS`);
        const character = this.getCharacter(this.selectedCharacter);
        if (character) {
            console.log(`👤 选择角色: ${character.name}`);
            console.log(`💫 角色技能: ${character.skill}`);
        }
    }
    getCharacter(characterId) {
        return characters.find(char => char.id === characterId);
    }
    nextLevel() {
        this.currentLevel++;
        this.score += 100;
        console.log(`⬆️ 进入第 ${this.currentLevel} 关！`);
        console.log(`🏆 当前分数: ${this.score}`);
    }
    gameOver() {
        console.log(`💔 游戏结束！最终分数: ${this.score}`);
        console.log(`🏅 达到关卡: ${this.currentLevel}`);
    }
}
exports.GameManager = GameManager;
// 测试游戏功能
function testGameFeatures() {
    console.log("=".repeat(50));
    console.log("🎮 星际暖光跑酷 - 测试环境");
    console.log("=".repeat(50));
    const gameManager = new GameManager();
    // 测试游戏开始
    gameManager.startGame();
    // 测试关卡进度
    gameManager.nextLevel();
    gameManager.nextLevel();
    // 测试游戏结束
    gameManager.gameOver();
    // 显示所有角色
    console.log("\n🎭 可用角色列表:");
    characters.forEach((char, index) => {
        const status = char.unlocked ? "✅ 已解锁" : "🔒 未解锁";
        console.log(`${index + 1}. ${char.name} - ${status}`);
        console.log(`   ${char.description}`);
        console.log(`   技能: ${char.skill}`);
    });
    console.log("\n🎯 TypeScript环境测试完成！");
}
// 执行测试
testGameFeatures();
