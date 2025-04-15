
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, Facebook, Github, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // This would normally connect to a backend
    toast({
      title: "Login successful",
      description: "Welcome back to Cosmic Tees!",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerEmail || !registerPassword || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (registerPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // This would normally connect to a backend
    toast({
      title: "Registration successful",
      description: "Welcome to Cosmic Tees!",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-12 flex items-center justify-center">
        <div className="container px-4 mx-auto">
          <Card className="cosmic-card max-w-md mx-auto p-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-comic text-white mb-2">Welcome, Cosmic Hero!</h1>
              <p className="text-foreground/70">Sign in to access your account</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/40" />
                      <Input
                        type="email"
                        placeholder="Email address"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/40" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-3 text-foreground/40 hover:text-foreground/70"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="remember" 
                        className="rounded border-accent/30 bg-background/50 text-primary focus:ring-primary"
                      />
                      <label htmlFor="remember" className="text-sm text-foreground/70">Remember me</label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                      Forgot password?
                    </Link>
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full">
                    Sign In
                  </Button>
                </form>
                
                <div className="relative my-6">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-foreground/50">
                    OR CONTINUE WITH
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/40" />
                      <Input
                        type="email"
                        placeholder="Email address"
                        className="pl-10"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/40" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pl-10"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                      />
                    </div>
                    
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/40" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        className="pl-10"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-3 text-foreground/40 hover:text-foreground/70"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="rounded border-accent/30 bg-background/50 text-primary focus:ring-primary"
                    />
                    <label htmlFor="terms" className="text-sm text-foreground/70">
                      I agree to the <Link to="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link>{" "}
                      and <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>
                    </label>
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full">
                    Create Account
                  </Button>
                </form>
                
                <div className="relative my-6">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-foreground/50">
                    OR SIGN UP WITH
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
