const simpleGit = require('simple-git/promise')
const Chart = require('chart.js/auto')

async function getCommits() {
    const repositoryPath = '../eslint-plugin-test-id'
    const git = simpleGit(repositoryPath)

    const commitData = {}
    const commits = await git.log()

    commits.all.forEach(commit => {
        const { author_name, author_email, date } = commit

        const dateString = new Date(date).toLocaleDateString()
        const commitInfo = {
            email: author_email,
            date: dateString
        }

        if (commitData[author_name]) {
            commitData[author_name].push(commitInfo)
        } else {
            commitData[author_name] = [commitInfo]
        }
    })

    return commitData
}

async function renderChart() {
    const commitData = await getCommits()

    const dates = {}
    Object.keys(commitData).forEach(author => {
        commitData[author].forEach(commit => {
            if (dates[commit.date]) {
                dates[commit.date][author] = (dates[commit.date][author] || 0) + 1
            } else {
                dates[commit.date] = { [author]: 1 }
            }
        })
    })

    const chartData = {
        labels: Object.keys(dates),
        datasets: Object.keys(commitData).map(author => ({
            label: author,
            data: Object.values(dates).map(date => date[author] || 0),
            backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`
        }))
    }

    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        precision: 0
                    }
                }
            }
        }
    }

    const chartCanvas = document.getElementById('chart')
    new Chart(chartCanvas, chartConfig)
}

renderChart()
