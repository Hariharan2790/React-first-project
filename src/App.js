
import './App.css';
import Pricecard from './Pricecard';


function App() {
  let priceList = [
    {
      plan: "FREE",
      price: "0",
      currency: "$",
      period: "month",
      features: [
        {
          name: "Single User",
          enable: true
        },
        {
          name: "5GB Storage",
          enable: true
        },
        {
          name: "Unlimited Public Projects",
          enable: true
        },
        {
          name: "Community Access",
          enable: true
        },
        {
          name: "Unlimited Private Projects",
          enable: false
        },
        {
          name: "Dedicated Phone Support",
          enable: false
        },
        {
          name: "Free Subdomain",
          enable: false
        },
        {
          name: "Monthly Status Reports",
          enable: false
        }

      ]

    },
    {
      plan: "PLUS",
      price: "9",
      currency: "$",
      period: "month",
      features: [
        {
          name: "5 Users",
          enable: true,
          isStrong : true
        },
        {
          name: "50GB Storage",
          enable: true
        },
        {
          name: "Unlimited Public Projects",
          enable: true
        },
        {
          name: "Community Access",
          enable: true
        },
        {
          name: "Unlimited Private Projects",
          enable: true
        },
        {
          name: "Dedicated Phone Support",
          enable: true
        },
        {
          name: "Free Subdomain",
          enable: true
        },
        {
          name: "Monthly Status Reports",
          enable: false
        }

      ]


    },
    {
      plan: "PRO",
      price: "49",
      currency: "$",
      period: "month",
      features: [
        {
          name: "Unlimited Users",
          enable: true,
          isStrong : true
        },
        {
          name: "150GB Storage",
          enable: true
        },
        {
          name: "Unlimited Public Projects",
          enable: true
        },
        {
          name: "Community Access",
          enable: true
        },
        {
          name: "Unlimited Private Projects",
          enable: true
        },
        {
          name: "Dedicated Phone Support",
          enable: true
        },
        {
          name: "Free Subdomain",
          enable: true
        },
        {
          name: "Monthly Status Reports",
          enable: true
        }

      ]


    }
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <Pricecard data = {priceList[0]}></Pricecard>
          <Pricecard data = {priceList[1]}></Pricecard>
          <Pricecard data = {priceList[2]}></Pricecard>
        </div>
      </div>
    </section>
  );
}

export default App;
