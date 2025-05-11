import React, { useState } from "react";
import { Link } from "react-router-dom";

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [state, setState] = useState({
    children: [{ id: crypto.randomUUID(), age: "" }],
    interests: [],
    customInterest: "",
    helpOption: "",
    customHelpOption: "",
  });

  // Handle adding a new child
  const addChild = () => {
    if (state.children.length < 5) {
      setState({
        ...state,
        children: [...state.children, { id: crypto.randomUUID(), age: "" }],
      });
    }
  };

  // Update child age
  const updateChildAge = (id, age) => {
    setState({
      ...state,
      children: state.children.map(child =>
        child.id === id ? { ...child, age } : child
      ),
    });
  };

  // Handle interest selection
  const toggleInterest = (interest) => {
    const newInterests = state.interests.includes(interest)
      ? state.interests.filter(i => i !== interest)
      : [...state.interests, interest];
    
    setState({ ...state, interests: newInterests });
  };

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    
    try {
      // Create payload from state
      const payload = {
        children: state.children.map(child => child.age),
        interests: state.interests,
        customInterest: state.customInterest,
        helpOption: state.helpOption,
        customHelpOption: state.customHelpOption
      };

      // Convert payload to query parameters
      const queryParams = new URLSearchParams({
        children: JSON.stringify(payload.children),
        interests: JSON.stringify(payload.interests),
        customInterest: payload.customInterest,
        helpOption: payload.helpOption,
        customHelpOption: payload.customHelpOption
      }).toString();

      // Make mock GET request
      const response = await fetch(`/api/mock-endpoint?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Redirect to dashboard with query parameters
      window.location.href = `/activity-listing`;
      
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Go to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Custom Radio component
  const Radio = ({ id, value, checked, onChange, label }) => (
    <div className="flex items-center space-x-3">
      <input 
        type="radio" 
        id={id} 
        value={value} 
        checked={checked} 
        onChange={onChange}
        className="w-4 h-4 text-[#3D07F0] border-gray-300 focus:ring-[#3D07F0]"
      />
      <label htmlFor={id} className="text-[14px] md:text-base text-[#666666] poppins-regular">{label}</label>
    </div>
  );

  // Custom Checkbox component
  const Checkbox = ({ id, checked, onChange, label }) => (
    <div className="flex items-center space-x-3">
      <input 
        type="checkbox" 
        id={id} 
        checked={checked} 
        onChange={onChange}
        className="w-4 h-4 text-[#3D07F0] border-gray-300 rounded focus:ring-[#3D07F0]"
      />
      <label htmlFor={id} className="text-[14px] md:text-base text-[#666666] poppins-regular">{label}</label>
    </div>
  );

  // Custom Button component
  const Button = ({ onClick, disabled, variant, children, className }) => {
    const baseClasses = "px-8 py-2 rounded-md font-medium";
    const variantClasses = variant === "outline" 
      ? "border border-indigo-700 text-indigo-700 hover:bg-indigo-50" 
      : "bg-indigo-700 hover:bg-indigo-800 text-white";
    
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </button>
    );
  };

  // Custom Textarea component
  const Textarea = ({ placeholder, value, onChange }) => (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
      rows={3}
    />
  );

  // Render success screen
  const renderSuccessScreen = () => {
    return (
      <div className="space-y-6 text-center">
        <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl poppins-bold text-gray-800">Thank You!</h2>
        <p className="text-gray-600 max-w-md mx-auto poppins-regular">
          Your information has been successfully submitted. We'll use this to personalize your experience.
        </p>
        

        {/* Show this only if the user is not Logged in */}
        <div className="pt-6">
          <p className="font-medium mb-4 poppins-semibold">Take the next step:</p>
          <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link to="/login" className="inline-block w-full md:w-auto">
              <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                <button className="bg-[#2643A2] text-nowrap text-white px-24 py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                    Login
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Render error screen
  const renderErrorScreen = () => {
    return (
      <div className="space-y-6 text-center">
        <div className="rounded-full bg-red-100 w-16 h-16 flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800">Something went wrong</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          We couldn't process your submission. Please try again.
        </p>
        
        <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
          <button 
            onClick={() => setSubmissionStatus("idle")} 
            className="bg-[#2643A2] text-nowrap text-white px-24 py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer"
          >
            Try Again
          </button>
        </div>  
      </div>
    );
  };

  // If submission is successful, show success screen
  if (submissionStatus === "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {renderSuccessScreen()}
      </div>
    );
  }

  // If submission failed, show error screen
  if (submissionStatus === "error") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {renderErrorScreen()}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 lg:py-16 mb-20 md:mb-0">
      {/* Step 1: Child Age */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="space-y-1 text-left">
            <h1 className="text-[30px] md:text-[48px] leading-[120%] tracking-[0%] poppins-semibold">Welcome to PlanO</h1>
            <p className="text-[16px] md:text-[20px] poppins-regular text-[#4D4D4D]">We would love to know a bit more about you!</p>
          </div>

          <div className="space-y-8 mt-8">
            <h2 className="poppins-semibold text-[24px] md:text-[32px] leading-[120%] tracking-[0%]">How old is your child?</h2>
            
            {state.children.map((child, index) => (
              <div key={child.id} className="space-y-4 md:space-y-3">
                <h3 className="poppins-medium text-lg">Child {index + 1}</h3>
                <div className="flex flex-col space-y-4">
                  <Radio
                    id={`under-5-${child.id}`}
                    value="under-5"
                    checked={child.age === "under-5"}
                    onChange={() => updateChildAge(child.id, "under-5")}
                    label="Under 5 years"
                  />
                  <Radio
                    id={`5-10-${child.id}`}
                    value="5-10"
                    checked={child.age === "5-10"}
                    onChange={() => updateChildAge(child.id, "5-10")}
                    label="5-10 years"
                  />
                  <Radio
                    id={`10-14-${child.id}`}
                    value="10-14"
                    checked={child.age === "10-14"}
                    onChange={() => updateChildAge(child.id, "10-14")}
                    label="10-14 years"
                  />
                  <Radio
                    id={`14+-${child.id}`}
                    value="14+"
                    checked={child.age === "14+"}
                    onChange={() => updateChildAge(child.id, "14+")}
                    label="14+ years"
                  />
                </div>
              </div>
            ))}
            
            {state.children.length < 5 && (
              <button
                type="button"
                onClick={addChild}
                className="text-[#2111CD] hover:cursor-pointer poppins-medium flex items-center"
              >
                + Add another child
              </button>
            )}
          </div>

          <div className="flex justify-end mt-10">
            <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                <button className="bg-[#2643A2] text-nowrap text-white px-8 py-2 md:py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer"
                  onClick={nextStep}
                >
                    Continue
                </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Interests */}
      {step === 2 && (
        <div className="space-y-6 mb-20 md:mb-0">
          <div className="space-y-3">
            <h1 className="poppins-semibold text-[24px] md:text-[32px] leading-[120%] tracking-[0%]">Great! Next we would love to know about your kids' interests.</h1>
            <p className="text-[#4D4D4D] text-[16px] poppins-regular ">Pick all that apply.</p>
          </div>

          <div className="space-y-4 md:space-y-3 mt-6">
            <Checkbox
              id="swimming"
              checked={state.interests.includes("Swimming")}
              onChange={() => toggleInterest("Swimming")}
              label="Swimming"
            />
            
            <Checkbox
              id="soccer"
              checked={state.interests.includes("Soccer or Team Sports")}
              onChange={() => toggleInterest("Soccer or Team Sports")}
              label="Soccer or Team Sports"
            />
            
            <Checkbox
              id="music"
              checked={state.interests.includes("Music & Dance")}
              onChange={() => toggleInterest("Music & Dance")}
              label="Music & Dance"
            />
            
            <Checkbox
              id="stem"
              checked={state.interests.includes("STEM & Coding")}
              onChange={() => toggleInterest("STEM & Coding")}
              label="STEM & Coding"
            />
            
            <Checkbox
              id="language"
              checked={state.interests.includes("Language & Reading")}
              onChange={() => toggleInterest("Language & Reading")}
              label="Language & Reading"
            />
            
            <Checkbox
              id="build"
              checked={state.interests.includes("I want my kid to build new interest")}
              onChange={() => toggleInterest("I want my kid to build new interest")}
              label="I want my kid to build new interest"
            />
            
            <Checkbox
              id="other"
              checked={state.interests.includes("Something else")}
              onChange={() => toggleInterest("Something else")}
              label="Something else"
            />
            
            {state.interests.includes("Something else") && (
              <div className="mt-2">
                <Textarea
                  placeholder="Add your desired activity here"
                  value={state.customInterest}
                  onChange={(e) => setState({ ...state, customInterest: e.target.value })}
                />
              </div>
            )}
          </div>

          <div className="flex justify-between mt-10">
              <button className="text-[#2643A2] border-2 border-[#2643A2] text-nowrap px-8 py-2 md:py-3 rounded-xl h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:text-white hover:cursor-pointer"
                onClick={prevStep}
              >
                  Back
              </button>

              <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                <button className="bg-[#2643A2] text-nowrap text-white px-8 py-2 md:py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer"
                  onClick={nextStep}
                >
                    Continue
                </button>
              </div>
          </div>
        </div>
      )}

      {/* Step 3: Help Options */}
      {step === 3 && (
        <div className="space-y-6 mb-20 md:mb-0">
          <div className="space-y-2">
            <h1 className="text-2xl poppins-semibold md:text-[32px] leading-[120%] tracking-[0%]">Perfect! Lastly, we would love to know how we can help you.</h1>
          </div>

          <div className="space-y-4 md:space-y-3 mt-6">
            <div className="flex flex-col space-y-3">
              <Radio
                id="explore"
                value="explore"
                checked={state.helpOption === "explore"}
                onChange={() => setState({ ...state, helpOption: "explore" })}
                label="I want to explore new activities for my child"
              />
              
              <Radio
                id="discover"
                value="discover"
                checked={state.helpOption === "discover"}
                onChange={() => setState({ ...state, helpOption: "discover" })}
                label="I want to discover new providers in my area"
              />
              
              <Radio
                id="weekend"
                value="weekend"
                checked={state.helpOption === "weekend"}
                onChange={() => setState({ ...state, helpOption: "weekend" })}
                label="I want to explore family weekend events in my area"
              />
              
              <Radio
                id="planning"
                value="planning"
                checked={state.helpOption === "planning"}
                onChange={() => setState({ ...state, helpOption: "planning" })}
                label="I want PlanO to do my kids' activity planning for me"
              />
              
              <Radio
                id="browsing"
                value="browsing"
                checked={state.helpOption === "browsing"}
                onChange={() => setState({ ...state, helpOption: "browsing" })}
                label="Dont know yet. I am just browsing"
              />
              
              <Radio
                id="other-help"
                value="other"
                checked={state.helpOption === "other"}
                onChange={() => setState({ ...state, helpOption: "other" })}
                label="Something else"
              />
            </div>
            
            {state.helpOption === "other" && (
              <div className="mt-2">
                <Textarea
                  placeholder="Add your desired goal here"
                  value={state.customHelpOption}
                  onChange={(e) => setState({ ...state, customHelpOption: e.target.value })}
                />
              </div>
            )}
          </div>

          <div className="flex justify-between mt-10">
            <button 
              onClick={prevStep} 
              className="text-[#2643A2] border-2 border-[#2643A2] text-nowrap px-8 py-2 md:py-3 rounded-xl h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:text-white hover:cursor-pointer"
            >
              Back
            </button>
            <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="bg-[#2643A2] text-nowrap text-white px-8 py-2 md:py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
