
import { MiddleUi } from './MiddleUi';
import { Card } from './Card';
import './App.css';

function App() {


        const dataCards = [
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
                {heading: 'Buy a new car', time:'10:30'},
        ]

        const topMultipleCards = dataCards.map(each => (
                <Card headiing={each.heading} time={each.time} />
        ))
        


        return (
                <div className="App h-[100vh] overflow-hidden">

                        {topMultipleCards}
                        <MiddleUi />


                </div>
        );
}

export default App;
